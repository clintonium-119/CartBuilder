
  function deleteColumn(cell, columnID) {

    var index = cell.cellIndex;

    //cats.splice(index - 2, 1);

    var dvCategories = $('#dvCategories');
    var img = cell.firstChild;

    $('#col' + columnID).children().appendTo("#dvUnused");
    dvCategories.append(img);
    $('#tab').find('tr').each(function () {
      this.removeChild(this.cells[index]);
    });

    //catCount--;

  }

  jQuery.moveColumn = function (table, from, to) {
    var rows = jQuery('tr', table);
    var cols;
    rows.each(function () {
      cols = jQuery(this).children('th, td');
      cols.eq(from).detach().insertBefore(cols.eq(to));
    });
  }


  function moveLeft(index) {
    if (index == 2) return;
    jQuery.moveColumn($('#tab'), index, index - 1);
  }

  function moveRight(index) {

    var colCount = $("#tab").find("tr:first td").length;
    if (index == colCount - 1) return;
    jQuery.moveColumn($('#tab'), index, index + 2);
  }