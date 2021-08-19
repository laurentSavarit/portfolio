import { mount } from '@vue/test-utils'
import contact from '@/components/contact.vue'

describe('Contact', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(contact)
    expect(wrapper.vm).toBeTruthy()
  })
})
