(function ($) {

    var screenWidth = $(window).width();
    var defaults = {
        // дефолтные опции
        template: function () {
            return `
                <div class="test-wrap" >                      
                    <select>
                        <option value="">Как заполнить поля?</option>   
                        <option value="required">Только обязательные</option>   
                    </select>
                </div>`
        }
    };

    $('form').each(function () {

        var position = '110%';
        var $this = $(this);

        $this.css('position', 'relative');
        $this.find('input')
        $this.append(defaults.template);

        if ($this.width() == screenWidth) {
            position = '85%';
        }

        $this.find('.test-wrap').css({
            position: 'absolute',
            top: 0,
            left: position,
            backgroundColor: '#f5f5f5',
            opacity: 0.8,
            border: '2px solid black',
            borderRadius: '2px'
        });

        $this.find('select').css({
            margin: '10px',
            width: 'auto',
            padding: '4px',
            height: 'auto'
        });

        $this.find('select').on('change', function () {

            let $select = $(this);

            fill.form($select, $this);

        });
    });
})(jQuery);
