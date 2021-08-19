import { mount } from '@vue/test-utils'
import detailRepo from '@/components/detailRepo.vue'

describe('DetailRepo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(detailRepo,{
      propsData:{
        idRepo: 1,
        repo:{
          name:"mon repo"
        }
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
