import {fill} from './modules/filler'
import {check} from "./modules/checker";

(function ($) {

    // let screenWidth = $(window).width();
    let defaults = {
        // дефолтные опции

        appPath: 'https://shejder.github.io/build/js',

        template: function () {
            return `
                <div class="test-wrap" >
                    <div class="top-wrapper">
                        <select class="fixture-type">
                            <option value="">Как заполнить поля?</option>   
                            <option value="required">Только обязательные</option>  
                            <option value="all">Все доступные</option>  
                            <option value="negative">Негативный тест</option>  
                        </select>
                        <div class="switcher close"><img src="` + defaults.appPath + `/img/arrow-down-left.svg" alt="open" title="Click to open"></div>                      
                    </div>
                    <button class="fill" type="button">Заполнить</button> 
                    <button class="clean" type="button">Сброс</button> 
                </div>`
        }
    };
//=======================================> Поиск форм и размещение виджета <============================================

    $('form').each(function () {

        let $this = $(this);


        //проверяем наличие виджета на странице
        if ($this.find('.test-wrap')) {
            $this.find('.test-wrap').remove();
        }

        //добавляем виджет
        if (check.action($this) !== 'isSearch' && $this.find('input').length > 1) {
            $this.append(defaults.template);
        }
        $this.css({
            position: 'relative'
        });


        let $widget = $this.find('.test-wrap');
        let $switcher = $widget.find('.switcher');
        let val;


//===================================> свитчер <========================================================================

        $switcher.on('click', function () {

            //проверяем состойние кнопки
            if ($switcher.hasClass('close')) {

                //если виджет закрыт
                $switcher.removeClass('close');

                $widget.css({
                    width: 'auto',
                    height: 'auto',
                });
                $switcher.css({
                    margin: 'auto 8px'
                });
                if ($widget.find('.fixture-type').val() !== '') {
                    $widget.find('button').toggle();
                }

                $switcher.find('img').attr('src', defaults.appPath + '/img/arrow-up-right.svg');
                $switcher.find('img').attr('title', 'Click to close');
                $switcher.find('img').attr('alt', 'close');
                $widget.find('select').toggle();


                $switcher.addClass('open');
            } else if ($switcher.hasClass('open')) {

                //если виджет открыт
                $switcher.removeClass('open');
                if ($widget.find('button').is(':visible')) {
                    $widget.find('button').toggle();
                }

                $widget.css({
                    width: '32px',
                    height: '32px',

                });
                $switcher.css({
                    margin: 'auto'

                });

                $switcher.find('img').attr('src', defaults.appPath + '/img/arrow-down-left.svg');
                $switcher.find('img').attr('title', 'Click to open');
                $switcher.find('img').attr('alt', 'open');


                $widget.find('select').toggle();

                $switcher.addClass('close');

            }

        });


//==============================================> кнопки <==============================================================

        $widget.find('.fixture-type').on('change', function () {

            let $select = $(this);
            val = $select.val();
            if ($widget.find('button').is(':hidden')) {
                $widget.find('button').toggle();
            }

            if (val === 'negative') {

                let checkboxes = `
                <p><input type="checkbox" name="phone">Телефон</p>
                <p><input type="checkbox" name="email">Почта</p>`;

                $widget.find('.top-wrapper').append(checkboxes);
            }


        });

        $widget.find('.clean').on('click', function () {


            $this.find('input').each(function () {

                let $input = $(this);
                if (check.type($input) !== 'submit' && $input.is(':visible')) {
                    $input.val('');
                }

                $widget.find('.fill').text('Заполнить');

            });
            $this.find('textarea').each(function () {
                let $textarea = $(this);
                if ($textarea.is(':visible')) {
                    $textarea.val('');
                }
            });

        });

        $widget.find('.fill').on('click', function () {
            let $button = $(this);
            $button.text('Перезаполнить');
            if (val === 'required') {

                fill.required($this);

            } else if (val === 'all') {

                fill.all($this);

            }
        });

//=============================================> стили виджета <========================================================

        $widget.css({
            position: 'absolute',
            top: 0,
            right: '10px',
            //left: /*position*/'94%',
            backgroundColor: '#f5f5f5',
            opacity: 0.9,
            border: '2px solid black',
            borderRadius: '2px',
            zIndex: 999999,
            width: '32px',
            height: '32px'

        });

        $widget.find('select').css({
            margin: '10px',
            width: 'auto',
            padding: '4px',
            height: 'auto',
            display: 'none'

        });

        $widget.find('button').css({
            margin: '10px 20px',
            padding: '4px',
            display: 'none',
            cursor: 'pointer'

        });

        $widget.find('.switcher').css({
            padding: '4px',
            width: '28px',
            // height: '28px',
            display: 'block',
            // border: '1px solid black'
            boxSizing: 'unset',
            cursor: 'pointer'
        });

        $widget.find('.top-wrapper').css({
            display: 'flex',
            verticalAlign: 'baseline',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            maxWidth: '243px'
        });

        $widget.find('p input').css({
            margin: '5px',
            fontColor: 'black'
        });


    });
})(jQuery);
