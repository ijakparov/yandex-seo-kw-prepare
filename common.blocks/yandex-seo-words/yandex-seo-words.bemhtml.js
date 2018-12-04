block('yandex-seo-words')({
    js: true,
    content: (node, ctx) => [
        {
            elem: 'inner',
            content: [
                {
                    elem: 'title',
                    content: 'Yandex SEO tool'
                },
                {
                    elem: 'sourse',
                    content: {
                        block: 'textarea',
                        mods: {
                            theme: 'islands',
                            size: 'l',
                            width: 'available'
                        },
                        placeholder: 'Фразы для обработки'
                    },

                },
                {
                    elem: 'control-wrapper',
                    mix: {
                        block: 'clearfix'
                    },
                    content: {
                        elem: 'control',
                        content: {

                            block: 'button',
                            mods: {
                                theme: 'islands',
                                size: 'l'
                            },
                            text: 'Обработать',
                            js: {
                                action: '_makeit'
                            }
                        }
                    }
                },
                {
                    elem: 'result',
                    content: {
                        block: 'textarea',
                        mods: {
                            theme: 'islands',
                            size: 'l',
                            width: 'available'
                        },
                        placeholder: 'Результат'
                    },

                }
            ]
        }
    ]
});