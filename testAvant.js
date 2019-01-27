const assert = require('assert');

describe('Flujo cotización de paquetes', () => {
    it('Test', () => {


		browser.url('https://www.avantrip.com/');

		//Hago click en paquetes
		const link = $('=Paquetes');
		link.click();


		//relleno campos para el paquete
		const selectBox= $('#app_buscador_destino');

		selectBox.selectByIndex(25);
    		console.log(selectBox.getValue());


		const selectBoxMes= $('#app_buscador_mes');

		browser.pause(3000);
		selectBoxMes.selectByIndex(1);

		browser.pause(1000);

		//hago click en Buscar
		browser.keys('\uE004');
		browser.keys('\uE004');
		browser.keys('\uE00D');


		console.log('PASAMOS A LA PANTALLA DE COTIZACIÓN');    

		//Verifico que exista el formulario sin-resultados

		const    elem = $('.sin-resultados');
 

	        elem.waitForExist(8000); 


 	  	if( elem.isExisting()){
 
 		   	console.log("EL FORM EXISTE"); // outputs: true
		 }
		else{
 
 		   console.log("EL FORM NO EXISTE"); // outputs: true
		}




		var i;
		for (i = 0; i < 17; i++) { 
			browser.keys('\uE004');
			browser.pause(100);
		}

//		browser.keys('!');
//		browser.pause(100);

		//relleno campos obligatorios

		const fechaSal = $('#app_detalleLeadsExtended_fechaSalida');
		fechaSal.setValue('30-01-2019');

		browser.pause(100);

		const cantNoches = $('#app_detalleLeadsExtended_cantNoches');
		cantNoches.addValue('1');
		browser.pause(100);

		const hotel = $('#app_detalleLeadsExtended_hoteleria');
		hotel.addValue('4');
		browser.pause(100);

		const coment = $('#app_detalleLeadsExtended_comentarios');
		coment.addValue('ESTO ES UNA PRUEBA.');
		browser.pause(100);

		const nombre = $('#app_detalleLeadsExtended_nombre');
		nombre.addValue('NICOLAS MILANO');
		browser.pause(100);

		const tel = $('#app_detalleLeadsExtended_telefono');
		tel.addValue('12345678');
		browser.pause(100);

		const mail = $('#app_detalleLeadsExtended_email');
		mail.addValue('franco.sayago@bibamgroup.com');
		browser.pause(100);

//franco.sayago@bibamgroup.com
//milanonicolas@yahoo.com

		const hora = $('#app_detalleLeadsExtended_timetable');
		hora.selectByIndex('1');
		browser.pause(100);

		const botonSub = $('#leadsSubmit');
		botonSub.click();
		browser.pause(100);

		
		console.log(browser.getTitle());

		const titulo=browser.getTitle();


	//comparo el título de la página del browser para saber si estoy en la página  de gracias
        
	if( titulo.localeCompare("Paquetes Turísticos en Oferta: Planeá tu Viaje - Avantrip.com") == 0){
 
 	   console.log('NO ESTAMOS EN LA PÁGINA DE GRACIAS');
	}
	else{
 
 	   console.log('ESTAMOS EN LA PAGINA DE GRACIAS'); 
	}


	browser.pause(7000);


});
});