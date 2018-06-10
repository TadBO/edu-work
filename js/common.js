/**
 * Created by Tuber on 2018/6/10.
 */
function getFormData(id) {
    var formData = {};
    $('#' + id).find('input').each(function (i, val) {
        var key = $(val).attr('name'),
            value = $(val).val();
        formData[key] = value;
    });
    return formData;
}