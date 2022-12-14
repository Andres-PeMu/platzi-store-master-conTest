import React from "react";
import { mount } from "enzyme";
import { create } from 'react-test-renderer';
import Footer from "../../components/Footer";

describe('Footer', () => {
    const footer = mount(<Footer />);
    test('render de componente Footer', () => {
        expect(footer.length).toEqual(1);
    });
    test('Rnder del titulo', () => {
        expect(footer.find('.Footer-title').text('')).toEqual('Platzi Store');
    });
});

describe('Footer Snapshop', () => {
    test('Comprobar la UI del componente Footer', () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot();
    });
});