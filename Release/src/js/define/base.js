function timeDiff(e){var t=new Date(e),a=new Date-t,n=a/1e3/60/60/24;return Math.floor(n)}function getNowDate(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}function getWeek(){return(new Date).getDay()}var $obj=$("");$obj.each(function(){var e=$(this),t=e.data("value"),a=Math.ceil(t/99),n=0,r=setInterval(function(){n+=a,n>t?(e.html(t),clearInterval(r)):e.text(n)},10)}),getWeek();