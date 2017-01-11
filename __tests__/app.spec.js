import React from 'react'
import {shallow} from 'enzyme'
import Counter from '../app/components/counter'


describe('[Component] counter', () => {
	it('should render', () => {

		const CounterComponent = shallow(<Counter />)
		expect(CounterComponent.find('#counter').length).toEqual(1)
	})


	it('should render initial value', () => {
		const CounterComponent = shallow(<Counter />)
		expect(CounterComponent.find('#counter p').text()).toEqual('0')
	})


	it('should increment counter to 1 on Increment button click', () => {
		const CounterComponent = shallow(<Counter />)
		CounterComponent.find('#counter #increment').simulate('click')
		expect(CounterComponent.find('#counter p').text()).toEqual('1')
	})

	it('should decrement counter to -1 on Decrement button click', () => {
		const CounterComponent = shallow(<Counter />)
		CounterComponent.find('#counter #decrement').simulate('click')
		expect(CounterComponent.find('#counter p').text()).toEqual('-1')
	})
})
