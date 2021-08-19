import { mount } from '@vue/test-utils'
import nav from '@/components/nav.vue'

describe('Journey', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(nav)
    expect(wrapper.vm).toBeTruthy()
  })
})
