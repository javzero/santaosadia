!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}({10:function(e,t){function n(e,t){swal(e,t,"error")}$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$(document).on("click",".List-Checkbox",function(e){e.stopPropagation();var t,n=[];$(".List-Checkbox:checked").each(function(){n.push($(this).attr("data-id")),$("#RowsToDeletion").val(n)}),1==n.length?$("#EditId").val(n):n.length<1?$("#EditId").val(""):(n.length,$("#EditId").val("")),1==(t=$(".List-Checkbox:checkbox:checked").length)?($(".DeleteBtn").removeClass("Hidden"),$(".EditBtn").removeClass("Hidden")):t>=2?$(".EditBtn").addClass("Hidden"):0==t&&($(".DeleteBtn").addClass("Hidden"),$(".EditBtn").addClass("Hidden")),$(this).prop("checked")?$(this).parent().parent().parent().addClass("row-selected"):$(this).parent().parent().parent().removeClass("row-selected")}),$(document).scroll(function(e){$(window).scrollTop()>150?($(".DeleteBtn").css({position:"fixed",bottom:"50px",right:"10px","z-index":"999"}),$(".EditBtn").css({position:"fixed",bottom:"50px",right:"130px","z-index":"999"})):($(".DeleteBtn").css({position:"relative",bottom:"auto",right:"auto","z-index":"999"}),$(".EditBtn").css({position:"relative",bottom:"auto",right:"auto","z-index":"999"}))}),$("#TableList tbody .CheckBoxes").find('input[type="checkbox"]').each(function(){$(this).prop("checked",!1)}),deleteRecord=function(e,t,o,r){swal({title:o,text:r,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ELIMINAR",cancelButtonText:"Cancelar",confirmButtonClass:"btn btnGreen",cancelButtonClass:"btn btnRed",buttonsStyling:!1}).then(function(){$.ajax({url:t,method:"POST",dataType:"JSON",data:{id:e},beforeSend:function(){},success:function(t){if($("#BatchDeleteBtn").addClass("Hidden"),1==t.success){for($("#Id"+e).hide(200),i=0;i<e.length;i++)$("#Id"+e[i]).hide(200);return swal("Ok!","Eliminación completa","success"),console.log(t),!0}return n("Ups!","Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos."),console.log(t),!1},error:function(e){$("#Error").html(e.responseText),console.log(e)},complete:function(){}})})},deleteAndReload=function(e,t,o,r){swal({title:o,text:r,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ELIMINAR",cancelButtonText:"Cancelar",confirmButtonClass:"btn btnGreen",cancelButtonClass:"btn btnRed",buttonsStyling:!1}).then(function(){$.ajax({url:t,method:"POST",dataType:"JSON",data:{id:e},beforeSend:function(){},success:function(e){if($("#BatchDeleteBtn").addClass("Hidden"),1!=e.success)return n("Ups!","Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos."),console.log(e),!1;location.reload()},error:function(e){$("#Error").html(e.responseText),console.log(e)}})})}},9:function(e,t,n){e.exports=n(10)}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTRmYmExOWE5OTgyNTY5MDBkMjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJhbGVydF9lcnJvciIsImJpZ3RleHQiLCJzbWFsbHRleHQiLCJzd2FsIiwiJCIsImFqYXhTZXR1cCIsImhlYWRlcnMiLCJYLUNTUkYtVE9LRU4iLCJhdHRyIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjb3VudFNlbGVjdGVkIiwic2VsZWN0ZWRSb3dzIiwiZWFjaCIsInB1c2giLCJ0aGlzIiwidmFsIiwibGVuZ3RoIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInByb3AiLCJwYXJlbnQiLCJzY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJjc3MiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0Iiwiei1pbmRleCIsImZpbmQiLCJkZWxldGVSZWNvcmQiLCJpZCIsInJvdXRlIiwidGl0bGUiLCJ0ZXh0IiwidHlwZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIiwiYnV0dG9uc1N0eWxpbmciLCJ0aGVuIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImh0bWwiLCJyZXNwb25zZVRleHQiLCJjb21wbGV0ZSIsImRlbGV0ZUFuZFJlbG9hZCIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxLQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLElBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsWUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsR0FDQUssY0FBQSxFQUNBQyxZQUFBLEVBQ0FDLElBQUFOLEtBTUFaLEVBQUFtQixFQUFBLFNBQUFoQixHQUNBLElBQUFTLEVBQUFULEtBQUFpQixXQUNBLFdBQTJCLE9BQUFqQixFQUFBLFNBQzNCLFdBQWlDLE9BQUFBLEdBRWpDLE9BREFILEVBQUFVLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVosRUFBQWEsRUFBQSxTQUFBUSxFQUFBQyxHQUFzRCxPQUFBUixPQUFBUyxVQUFBQyxlQUFBakIsS0FBQWMsRUFBQUMsSUFHdER0QixFQUFBeUIsRUFBQSxHQUdBekIsSUFBQTBCLEVBQUEsc0JDcUlBLFNBQVNDLEVBQVlDLEVBQVNDLEdBQzFCQyxLQUNJRixFQUNBQyxFQUNBLFNBdE1SRSxFQUFFQyxXQUNFQyxTQUNJQyxlQUFnQkgsRUFBRSwyQkFB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YUFDbkJDLGdCQUFnQixJQUNkQyxLQUFLLFdBQ1AzQyxFQUFFNEMsTUFDREMsSUFBS2QsRUFDTGUsT0FBUSxPQUNSQyxTQUFVLE9BQ1ZDLE1BQVFsQixHQUFJQSxHQUNabUIsV0FBWSxhQUdaQyxRQUFTLFNBQVNGLEdBRWpCLEdBREFoRCxFQUFFLG1CQUFtQmlCLFNBQVMsVUFDVixHQUFoQitCLEVBQUtFLFFBTVIsT0FGQXRELEVBQVksT0FBTyxrSUFDbkJ3RCxRQUFRQyxJQUFJTCxJQUNMLEVBSlBXLFNBQVNDLFVBT1hOLE1BQU8sU0FBU04sR0FFZmhELEVBQUUsVUFBVXVELEtBQUtQLEVBQUtRLGNBQ3RCSixRQUFRQyxJQUFJTCIsImZpbGUiOiIvanMvdmFkbWluLWZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU0ZmJhMTlhOTk4MjU2OTAwZDIxIiwiJC5hamF4U2V0dXAoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICB9XHJcbn0pO1xyXG4gXHJcbi8qXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IExJU1RTXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuLy8gU2V0IExpc3QgQWN0aW9uIEJ1dHRvbnNcclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5MaXN0LUNoZWNrYm94XCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0dmFyIHNlbGVjdGVkUm93cyA9IFtdO1xyXG4gICAgJChcIi5MaXN0LUNoZWNrYm94OmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbigpIHsgICAgICAgICAgXHJcbiAgICAgICAgc2VsZWN0ZWRSb3dzLnB1c2goJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpO1xyXG5cdFx0JCgnI1Jvd3NUb0RlbGV0aW9uJykudmFsKHNlbGVjdGVkUm93cyk7XHJcbiAgICB9KTtcclxuICAgICAgIFxyXG4gICAgaWYoc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PSAxKXtcclxuICAgICAgICAkKCcjRWRpdElkJykudmFsKHNlbGVjdGVkUm93cyk7XHJcbiAgICB9IGVsc2UgaWYoc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgICQoJyNFZGl0SWQnKS52YWwoJycpO1xyXG4gICAgfSBlbHNlIGlmKHNlbGVjdGVkUm93cy5sZW5ndGggPiAxKXtcclxuICAgICAgICAkKCcjRWRpdElkJykudmFsKCcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI0VkaXRJZCcpLnZhbCgnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0J1dHRvbnModGhpcyk7XHJcblxyXG5cdHZhciBjaGVja2JveCA9ICQodGhpcykucHJvcCgnY2hlY2tlZCcpO1xyXG5cdGlmKGNoZWNrYm94KXtcclxuXHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ3Jvdy1zZWxlY3RlZCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdyb3ctc2VsZWN0ZWQnKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dCdXR0b25zKHRyaWdnZXIpIHtcclxuXHRcclxuXHR2YXIgY291bnRTZWxlY3RlZCA9ICQoJy5MaXN0LUNoZWNrYm94OmNoZWNrYm94OmNoZWNrZWQnKS5sZW5ndGg7XHJcblx0aWYoY291bnRTZWxlY3RlZCA9PSAxKSB7XHJcbiAgICAgICAgJCgnLkRlbGV0ZUJ0bicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdCQoJy5FZGl0QnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHJcblx0fSBlbHNlIGlmKGNvdW50U2VsZWN0ZWQgPj0gMikge1xyXG4gICAgICAgICQoJy5FZGl0QnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgfSBlbHNlIGlmKGNvdW50U2VsZWN0ZWQgPT0gMCkge1xyXG4gICAgICAgICQoJy5EZWxldGVCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcbiAgICAgICAgJCgnLkVkaXRCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNob3cgRWRpdCBhbmQgRGVsZXRlIGJ1dHRvbnMgaW4gYm90dG9tIGlmIHNjcm9sbGVkIHRvIG11dGNoXHJcbiQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbihlKXtcclxuXHR2YXIgc2Nyb2xsQW1vdW50ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdGlmKHNjcm9sbEFtb3VudCA+IDE1MCl7XHJcblx0XHQkKCcuRGVsZXRlQnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJmaXhlZFwiLCBcImJvdHRvbVwiOlwiNTBweFwiLCBcInJpZ2h0XCI6XCIxMHB4XCIsIFwiei1pbmRleFwiOlwiOTk5XCJ9KTtcclxuXHRcdCQoJy5FZGl0QnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJmaXhlZFwiLCBcImJvdHRvbVwiOlwiNTBweFwiLCBcInJpZ2h0XCI6XCIxMzBweFwiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJy5EZWxldGVCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6XCJhdXRvXCIsIFwicmlnaHRcIjpcImF1dG9cIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdFx0JCgnLkVkaXRCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6XCJhdXRvXCIsIFwicmlnaHRcIjpcImF1dG9cIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLyBVbmNoZWNrIGFsbCBjaGVja2JveGVzIG9uIHJlbG9hZC5cclxuZnVuY3Rpb24gdW5jaGVja0FsbCgpe1xyXG5cdCQoJyNUYWJsZUxpc3QgdGJvZHkgLkNoZWNrQm94ZXMnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1x0XHJcblx0fSk7XHRcclxufVxyXG51bmNoZWNrQWxsKCk7XHJcblxyXG4vKlxyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufCBGVU5DVElPTlNcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcblxyXG5kZWxldGVSZWNvcmQgPSBmdW5jdGlvbihpZCwgcm91dGUsIGJpZ3RleHQsIHNtYWxsdGV4dCkge1xyXG5cdHN3YWwoe1xyXG5cdFx0dGl0bGU6IGJpZ3RleHQsXHJcblx0XHR0ZXh0OiBzbWFsbHRleHQsXHJcblx0XHR0eXBlOiAnd2FybmluZycsXHJcblx0XHRzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcblx0XHRjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG5cdFx0Y29uZmlybUJ1dHRvblRleHQ6ICdFTElNSU5BUicsXHJcblx0XHRjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNsYXNzOiAnYnRuIGJ0bkdyZWVuJyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNsYXNzOiAnYnRuIGJ0blJlZCcsXHJcblx0XHRidXR0b25zU3R5bGluZzogZmFsc2VcclxuXHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiBcdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsOiByb3V0ZSxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsICAgICAgICAgICAgIFxyXG5cdFx0XHRkYXRhVHlwZTogJ0pTT04nLFxyXG5cdFx0XHRkYXRhOiB7IGlkOiBpZCB9LFxyXG5cdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdC8vICQoJyNNYWluLUxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0JCgnI0JhdGNoRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG5cdFx0XHRcdGlmIChkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0JCgnI0lkJytpZCkuaGlkZSgyMDApO1xyXG5cdFx0XHRcdFx0Zm9yKGk9MDsgaSA8IGlkLmxlbmd0aCA7IGkrKyl7XHJcblx0XHRcdFx0XHRcdCQoJyNJZCcraWRbaV0pLmhpZGUoMjAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGFsZXJ0X29rKCdPayEnLCdFbGltaW5hY2nDs24gY29tcGxldGEnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFsZXJ0X2Vycm9yKCdVcHMhJywnSGEgb2N1cnJpZG8gdW4gZXJyb3IgKFB1ZWRlIHF1ZSBlc3RlIHJlZ2lzdHJvIHRlbmdhIHJlbGFjacOzbiBjb24gb3Ryb3MgaXRlbXMgZW4gZWwgc2lzdGVtYSkuIERlYmUgZWxpbWluYXIgcHJpbWVybyBsb3MgbWlzbW9zLicpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24oZGF0YSlcclxuXHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tcGxldGU6IGZ1bmN0aW9uKClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vICQoJyNNYWluLUxvYWRlcicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59XHJcblxyXG5kZWxldGVBbmRSZWxvYWQgPSBmdW5jdGlvbihpZCwgcm91dGUsIGJpZ3RleHQsIHNtYWxsdGV4dCkge1xyXG5cdHN3YWwoe1xyXG5cdFx0dGl0bGU6IGJpZ3RleHQsXHJcblx0XHR0ZXh0OiBzbWFsbHRleHQsXHJcblx0XHR0eXBlOiAnd2FybmluZycsXHJcblx0XHRzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcblx0XHRjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG5cdFx0Y29uZmlybUJ1dHRvblRleHQ6ICdFTElNSU5BUicsXHJcblx0XHRjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG5cdFx0Y29uZmlybUJ1dHRvbkNsYXNzOiAnYnRuIGJ0bkdyZWVuJyxcclxuXHRcdGNhbmNlbEJ1dHRvbkNsYXNzOiAnYnRuIGJ0blJlZCcsXHJcblx0XHRidXR0b25zU3R5bGluZzogZmFsc2VcclxuXHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybDogcm91dGUsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLCAgICAgICAgICAgICBcclxuXHRcdFx0ZGF0YVR5cGU6ICdKU09OJyxcclxuXHRcdFx0ZGF0YTogeyBpZDogaWQgfSxcclxuXHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQvLyAkKCcjTWFpbi1Mb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdCQoJyNCYXRjaERlbGV0ZUJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0XHRpZiAoZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuXHRcdFx0XHRcdC8vIGFsZXJ0X29rKCdPayEnLCdFbGltaW5hY2nDs24gY29tcGxldGEnKTtcclxuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhbGVydF9lcnJvcignVXBzIScsJ0hhIG9jdXJyaWRvIHVuIGVycm9yIChQdWVkZSBxdWUgZXN0ZSByZWdpc3RybyB0ZW5nYSByZWxhY2nDs24gY29uIG90cm9zIGl0ZW1zIGVuIGVsIHNpc3RlbWEpLiBEZWJlIGVsaW1pbmFyIHByaW1lcm8gbG9zIG1pc21vcy4nKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKGRhdGEpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcdFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn1cclxuXHJcbi8qXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG58IEFMRVJUU1xyXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFsZXJ0X29rKGJpZ3RleHQsIHNtYWxsdGV4dCl7XHJcbiAgICBzd2FsKFxyXG4gICAgICAgIGJpZ3RleHQsXHJcbiAgICAgICAgc21hbGx0ZXh0LFxyXG4gICAgICAgICdzdWNjZXNzJ1xyXG4gICAgKTsgICAgXHJcbn1cclxuICAgIFxyXG5mdW5jdGlvbiBhbGVydF9lcnJvcihiaWd0ZXh0LCBzbWFsbHRleHQpe1xyXG4gICAgc3dhbChcclxuICAgICAgICBiaWd0ZXh0LFxyXG4gICAgICAgIHNtYWxsdGV4dCxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGVydF9pbmZvKGJpZ3RleHQsIHNtYWxsdGV4dCl7XHJcblxyXG4gICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBiaWd0ZXh0LFxyXG4gICAgICAgIHR5cGU6ICdpbmZvJyxcclxuICAgICAgICBodG1sOiBzbWFsbHRleHQsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OlxyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJpb24tY2hlY2ttYXJrLXJvdW5kXCI+PC9pPiBPayEnXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZVBhcmVudCgpe1xyXG5cdCQodGhpcykucGFyZW50KCdoaWRlJyk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZhZG1pbi1mdW5jdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9