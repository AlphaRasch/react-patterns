import { Button, Row, Wrapper } from "./style.tsx";
import { useEffect, useState, type ComponentType } from "react";

const Component = () => (
    <Row>
        <Button>Button1</Button>
        <Button>Button2</Button>
    </Row>
);

function withLoading<P>(WrappedComponent: ComponentType<P>) {
    return (props: P) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 5000);
            return () => clearTimeout(timer);
        }, []);

        if (loading) return <p>Loading...</p>;

        return <WrappedComponent {...props} />;
    };
}

const LoadingComponent = withLoading(Component);

export const Decorator = () => {
    return (
        <Wrapper>
            <LoadingComponent />
        </Wrapper>
    );
};