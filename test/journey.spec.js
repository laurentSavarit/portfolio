import { mount } from '@vue/test-utils'
import journey from '@/components/journey.vue'

describe('Journey', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(journey)
    expect(wrapper.vm).toBeTruthy()
  })
})
