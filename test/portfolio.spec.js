import { mount } from '@vue/test-utils'
import portfolio from '@/components/portfolio.vue'

describe('Portfolio', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(portfolio)
    expect(wrapper.vm).toBeTruthy()
  })
})
