import { mount } from '@vue/test-utils'
import footer from '@/components/footer.vue'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(footer,{
      stubs:{
        NuxtLink: true
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
