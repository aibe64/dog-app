export const imageObserver = (el: any, options: {}) => {
    const observer = new IntersectionObserver((entries: any): void => {
        entries.forEach((entry: any, i: number) => {
            const imgEl = entry.target.firstElementChild?.firstElementChild as HTMLImageElement

            if (!entry.isIntersecting) {
                imgEl?.setAttribute('src', '')
                observer.unobserve(imgEl)

                return
            }
             // image is not on the viewport

            const newUrl = entry.target.firstElementChild?.firstElementChild?.getAttribute('data-url') as string

            imgEl?.setAttribute('src', newUrl)
        })
    }, options)

    // check existense of element collection
    el?.length
        ? el.forEach((item: HTMLElement) => observer.observe(item))
        : observer.observe(el)
}
