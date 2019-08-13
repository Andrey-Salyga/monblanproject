 $(function(){
        $("#to").datepicker({ dateFormat: 'dd_mm_yy' });
        $("#from").datepicker({ dateFormat: 'dd_mm_yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("yy-mm-dd", minValue);
            minValue.setDate(minValue.getDate()+1);
            $("#to").datepicker( "option", "minDate", minValue );
        })
    });

