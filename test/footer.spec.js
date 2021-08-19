import { mount } from '@vue/test-utils'
import footer from '@/components/footer.vue'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(footer)
    expect(wrapper.vm).toBeTruthy()
  })
})
