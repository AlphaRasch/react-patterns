import { useState, useEffect, type JSX } from 'react';
import { fetchQuantity } from '../mock/fetch-quantity';
import styled from 'styled-components';
import { fetchPromocode } from '../mock/fetch-promocode';

const PageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h2`
    width: auto;
`

const EmptySet = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Button = styled.button`
    width: auto;
    height: 2rem;

    padding: 1rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: 1rem;
    color: white;
    background: RoyalBlue;
`

const CartItemsList = styled.div`
    width: 300px;
    height: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
`

const CartItemBlock = styled.div`
    width: 100%;
    height: auto;

    border-radius: 0.5rem;
    border: 1px solid grey;

    box-sizing: border-box;
    padding: 1rem;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const CartSummary = styled.div`
    width: 300px;
    height: auto;

    margin-top: 0.4rem;

    border-radius: 0.5rem;
    border: 1px solid grey;

    box-sizing: border-box;
    padding: 1rem;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const CartItemTitle = styled.h4`
    padding: 0;
    margin: 0;
`

const CartItemPrice = styled.p`
    & span {
        font-weight: bold;
    }
`

const QuantityRow = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

const ResultPrice = styled.p`
    & span {
        font-weight: bold;
    }
`

const Input = styled.input`
    width: 100%;
    height: 1.2rem;

    margin-bottom: 0.6rem;

    outline: none;
    border: none;
    border-bottom: 1px solid RoyalBlue;
    cursor: pointer;

    font-size: 1rem;
`

const CartTotalPrice = styled.div`
    width: 100%;
    height: auto;

    margin-top: 0.8rem;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.4rem;
`

const TotalPriceItem = styled.p`
    margin: 0;
    & span {
        font-weight: bold;
    }
`

const PromoApplied = styled.p`
    margin: 0;
    & span {
        font-weight: bold;
    }
`

const CartActions = styled.div`
    width: 100%;
    height: auto;

    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.4rem;
`

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface StockResponse {
  available: number;
}

interface PromoCode {
  type: 'percent' | 'fixed';
  value: number;
  description: string;
}

interface PromoValidationResponse {
  valid: boolean;
  promo?: PromoCode;
  message?: string;
}

function CartPage(): JSX.Element {
  const [items, setItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoError, setPromoError] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        const parsed: unknown = JSON.parse(saved);
        setItems(parsed as CartItem[]);
      } catch (e) {
        console.error('Ошибка загрузки корзины:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    const uuid = crypto.randomUUID()
    setItems(prev => [...prev, {
        productId: uuid,
        name: `Product ${uuid.slice(0, 5)}`,
        price: Math.random() * 100,
        quantity: 1
    }])
  }

  const removeItem = (productId: string): void => {
    setItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number): void => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }

    fetchQuantity()
      .then((stock: StockResponse) => {
        if (quantity > stock.available) {
          alert(`Доступно только ${stock.available} шт.`);
          setItems(prev =>
            prev.map(item =>
              item.productId === productId
                ? { ...item, quantity: stock.available }
                : item
            )
          );
        } else {
          setItems(prev =>
            prev.map(item =>
              item.productId === productId
                ? { ...item, quantity }
                : item
            )
          );
        }
      })
      .catch((error: Error) => {
        console.error('Ошибка проверки остатков:', error);
      });
  };

  const applyPromoCode = (e?: React.SubmitEvent<HTMLFormElement>): void => {
    e?.preventDefault();
    setPromoError('');
    setIsLoading(true);

    if (promoCode.length < 5) {
      setPromoError('Промокод должен быть не менее 5 символов');
      setIsLoading(false);
      return;
    }

    if (!/^[A-Z0-9]+$/.test(promoCode)) {
      setPromoError('Промокод содержит недопустимые символы');
      setIsLoading(false);
      return;
    }

    fetchPromocode(promoCode)
      .then((result: PromoValidationResponse) => {
        if (result.valid && result.promo) {
          setAppliedPromo(result.promo);
        } else {
          setPromoError(result.message || 'Недействительный промокод');
        }
      })
      .catch((error: Error) => {
        setPromoError('Ошибка проверки промокода. Попробуйте позже.');
        console.error('Promo error:', error);
      })
      .finally(() => setIsLoading(false));
  };

  const getDiscount = (): number => {
    if (!appliedPromo) return 0;

    const subtotal = items.reduce(
      (sum: number, item: CartItem) => sum + item.price * item.quantity,
      0
    );

    if (appliedPromo.type === 'percent') {
      return subtotal * (appliedPromo.value / 100);
    }
    if (appliedPromo.type === 'fixed') {
      return Math.min(appliedPromo.value, subtotal);
    }

    return 0;
  };

  const subtotal = items.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );
  const discount = getDiscount();
  const delivery = subtotal > 5000 ? 0 : 500;
  const total = subtotal - discount + delivery;

  const clearCart = (): void => {
    setItems([]);
    setAppliedPromo(null);
    setPromoCode('');
    setPromoError('');
  };

  const handleCheckout = (): void => {
    console.log('Order:', {
      items,
      promo: appliedPromo,
      total,
    });
    clearCart();
    alert('Заказ оформлен!');
  };

  return (
    <PageWrapper>
      <Title>Корзина</Title>

      {items.length === 0 ? (
        <EmptySet>
            <p>Корзина пуста</p>
            <Button onClick={addItem}>Добавить товар</Button>
        </EmptySet>
      ) : (
        <>
          <CartItemsList>
            {items.map((item: CartItem) => (
              <CartItemBlock key={item.productId}>
                <CartItemTitle>{item.name}</CartItemTitle>
                <CartItemPrice>
                    <span>Цена: </span>
                    {item.price.toLocaleString()} ₽
                </CartItemPrice>
                <QuantityRow>
                  <Button
                    type="button"
                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    type="button"
                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  >
                    +
                  </Button>
                </QuantityRow>
                <ResultPrice>
                    <span>Итого: </span>
                    {(item.price * item.quantity).toLocaleString()} ₽
                </ResultPrice>
                <Button
                  type="button"
                  onClick={() => removeItem(item.productId)}
                >
                  Удалить
                </Button>
              </CartItemBlock>
            ))}
          </CartItemsList>

          <CartSummary>
            <form onSubmit={applyPromoCode}>
              {appliedPromo ? (
                <>
                <PromoApplied>
                  <span>Промокод: </span>
                  {appliedPromo.description}
                </PromoApplied>
                <Button
                    type="button"
                    onClick={() => setAppliedPromo(null)}
                  >
                    ×
                  </Button>
                  </>
              ) : (
                <>
                  <Input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="Введите промокод"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || promoCode.length === 0}
                  >
                    {isLoading ? 'Проверка...' : 'Применить'}
                  </Button>
                </>
              )}
              {promoError && (
                <p>{promoError}</p>
              )}
            </form>

            <CartTotalPrice>
              <TotalPriceItem>
                <span>Товары ({items.length}):</span>
                {subtotal.toLocaleString()} ₽
              </TotalPriceItem>
              {discount > 0 && (
                <TotalPriceItem>
                  <span>Скидка: </span>
                  −{discount.toLocaleString()} ₽
                </TotalPriceItem>
              )}
              <TotalPriceItem>
                <span>Доставка: </span>
                  {delivery === 0 ? 'Бесплатно' : `${delivery.toLocaleString()} ₽`}
              </TotalPriceItem>
              <TotalPriceItem>
                <span>Итого:</span>
                {total.toLocaleString()} ₽
              </TotalPriceItem>
            </CartTotalPrice>

            <CartActions>
              <Button
                type="button"
                onClick={clearCart}
              >
                Очистить корзину
              </Button>
              <Button
                type="button"
                onClick={handleCheckout}
              >
                Оформить заказ
              </Button>
            </CartActions>
          </CartSummary>
        </>
      )}
    </PageWrapper>
  );
}

export default CartPage;
export type { CartItem, PromoCode, StockResponse, PromoValidationResponse };