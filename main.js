$(document).ready(function () {
    var container = $('.container');

    console.log(Date.now());
    console.log(new Date().toLocaleDateString('en-US'));

    function formatTime(i) {
        if (i === 12) {
            return `12PM`;
        }

        if (i > 12) {
            return `${i - 12}PM`;
        }

        return `${i}AM`;
    }

    for (let i = 9; i < 18; i++) {
        console.log(i);

        const timeBlock = $('<div>')
            .attr('id', 'hour-${i}')
            .addClass('row time-block past');

        timeBlock.append($('<div>').addClass('col-md-1 hour').text(formatTime(i)));
        timeBlock.append($('<textarea>').addClass('col-md-10 description'));
        timeBlock.append(
            $('<button>')
                .addClass('btn saveBtn col-md-1')
                .append($('<i>').addClass('fas fa-save'))
        );

        container.append(timeBlock);

    }
});