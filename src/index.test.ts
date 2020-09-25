import { useIntersectionObserver } from './'
import { renderHook } from "@testing-library/react-hooks";

jest.useFakeTimers();

describe('useIntersectionObserver', () => {
  it('hook returns the right values', () => {
    const value = renderHook(() => useIntersectionObserver(entries => {
      console.log(entries)
    }, {}))

    expect(value).toBeDefined()
  })
})
