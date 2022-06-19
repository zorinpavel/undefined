const source =
    "Lorem ipsum dolor sit amet. Vel pariatur repudiandae sit corrupti dolorem est libero possimus ut voluptatum consectetur. Et veritatis dolor sed aliquam doloremque quo quam quis. At repudiandae dolore in deserunt reiciendis in voluptate quidem et distinctio magnam et incidunt ipsam aut excepturi nihil et fugit facilis. Eos fugit velit et nostrum inventore id recusandae nesciunt." +
    "Qui quae consectetur ex voluptatem repellendus 33 dolorem galisum sed rerum quidem ut tempora ducimus aut nesciunt nobis aut internos natus. Est esse eius aut sint quos At deleniti corporis et sequi totam est corporis quod ea neque minima sed temporibus saepe. Eos quod culpa non magni nihil et dolores maiores qui voluptatem natus id Quis necessitatibus." +
    "Sed illum laborum sit incidunt quisquam sit nisi sunt! Vel similique itaque et aperiam cupiditate 33 cumque molestiae id neque iure in tempora totam. Cum ullam illo a officia vitae eos sint excepturi et animi dicta.";


export const generateOne = () => {
    const ws = source.split(' ');

    return ws[Math.floor(Math.random() * ws.length)] + ' ' + ws[Math.floor(Math.random() * ws.length)];
};
