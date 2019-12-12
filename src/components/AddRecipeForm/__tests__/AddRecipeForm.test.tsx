import React from "react";
import { shallow } from "enzyme";
import { AddRecipeForm } from "../AddRecipeForm";


describe('AddRecipeForm', () => {
    describe('render', () => {
        test('Should render a component type Form', () => {
            const wrapper = shallow(<AddRecipeForm/>);
            const form = wrapper.find('form'); //.find('form');
            expect(form).toHaveLength(1);
        });
    });
});