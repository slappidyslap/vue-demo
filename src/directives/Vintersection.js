export default {
    name: 'intersection',
    updated(el, binding) {
        console.log(binding);
        const options = {
            rootMargin: '0px',
            threshold: 1.0,
        };
        const callback = (entries) => {
            if (entries[0].isIntersecting && binding.value.currentPage < binding.value.totalPage) {
                binding.value.fun();
                // eslint-disable-next-line no-plusplus
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
};
