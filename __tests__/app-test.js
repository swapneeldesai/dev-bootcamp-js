import React from 'react'
import {shallow} from 'enzyme'
import Counter from '../app/components/app'

describe('[Component] Counter', () => {

	it('Should render initial state', () => {
		const counter = shallow(<Counter />)
		expect(counter.find('#counter').text()).toEqual('0')
	})


	it('Should increment counter on clicking + button', () => {
		const counter = shallow(<Counter />)
		counter.find('#btn-increment').simulate('click')
		expect(counter.find('#counter').text()).toEqual('1')
	})

	it('Should decrement counter on clicking - button', () => {
		const counter = shallow(<Counter />)
		counter.find('#btn-decrement').simulate('click')
		expect(counter.find('#counter').text()).toEqual('-1')
	})

});