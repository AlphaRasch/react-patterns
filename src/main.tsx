import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router";
import { App } from './app';
import Observer from './app/observer';
import { Strategy } from './app/strategy';
import { StateComponent } from './app/state';
import { Singleton } from './app/singleton';
import { FabricMethod } from './app/fabric-method';
import { Prototype } from './app/prototype';
import { ProxyComponent } from './app/proxy';
import { Bridge } from './app/bridge';

import './index.css';
import {CommandComponent} from "./app/command";
import {BuilderComponent} from "./app/builder";
import {Decorator} from "./app/decorator";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        index: true
    },
    {
        path: "/observer",
        Component: Observer,
    },
    {
        path: "/strategy",
        Component: Strategy
    },
    {
        path: "/state",
        Component: StateComponent
    },
    {
        path: "/command",
        Component: CommandComponent
    },
    {
        path: "/singleton",
        Component: Singleton
    },
    {
        path: "/fabric-method",
        Component: FabricMethod
    },
    {
        path: "/prototype",
        Component: Prototype
    },
    {
        path: '/builder',
        Component: BuilderComponent,
    },
    {
        path: "/proxy",
        Component: ProxyComponent
    },
    {
        path: "/bridge",
        Component: Bridge
    },
    {
        path: '/decorator',
        Component: Decorator,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

