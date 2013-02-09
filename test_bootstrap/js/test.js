( function( jQuery, window, undefined ) {

	jQuery( function() {

		// --------- 変数・定数定義 ---------
		
		var buttonId = 0,
		
		// --------- 関数定義 ---------
		
			init = function () {
			
				mkHeader();
			
				mkTimeList();
			},
			
			mkHeader = function() {
			
				var now = new Date();
				
				var year  = now.getFullYear(),
					month = now.getMonth() + 1,
					day   = now.getDate();
				
				jQuery( '#header_date' ).append( year + '/' + month + '/' + day );
			},
			
			mkTimeList = function() {
			
				for ( var i = 0; i < 24; i++ ) {
				
					var tr = jQuery( '<tr>' );
					tr.attr( 'height', '50' );
					tr.append( '<td>' );
					tr.find( 'td' ).attr( 'id', 'hour_' + i );
					
					jQuery( '#time_list' ).append( tr );
				}
			};

		// --------- リスナー ---------
		
		jQuery( '#add_button' ).click( function() {
		
			var button = jQuery( '<button>' );
			button.attr( 'class', 'btn btn-inverse' );
			button.attr( 'id', 'button_' + buttonId );
			button.append( '新規アイテム' );
			
			button.click( function() {
			
				var button = jQuery( this );
				
				if ( window.confirm( '消しますか' ) ) {
				
					button.remove();
				
				} else {
				}
			} );
		
			jQuery( '#hour_0' ).append( button );
			
			buttonId++;
		} );
		
		// 実処理
		init();
	} );

} )( jQuery, window );