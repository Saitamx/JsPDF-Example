import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Logo from "./assets/img/logo.png";

const App = () => {
  const ContextOrdenCompra = {
    evento: {
      id: 1,
      nombre: "Inventario Hatt",
      nProyecto: "100-20",
    },
    proveedor: {
      id: 1,
      nombre: "Saicoma SpA",
      direccion: "Calle #123",
      rut: "12.345.678-9",
      email: "proveedor@hatt.cl",
      comuna: "Comuna",
      region: "Región",
      contacto: "Contacto Comercial",
      observaciones: "Observaciones",
      telefono: "987654321",
    },
    modulosEvento: {
      cantidad: 1,
      detalle:
        "Proin ligula urna ac ante ipsum primis in faucibus.",
      unidad: 5,
      total: 5,
    },
    formaPago: {},
  };

  const { evento, proveedor, modulosEvento } = ContextOrdenCompra;

  const ordenCompra = () => {
    var doc = new jsPDF();

    doc.addImage(Logo, "PNG", 25, 25, 40, 12); // Logo

    // Texto Orden Compra
    doc.setFontSize(11);
    doc.getFontList();
    doc.setFont("Helvetica", "Bold");
    doc.text("ORDEN COMPRA / SERVICIO", 129, 27);

    // N° de Proyecto
    doc.setTextColor(92, 185, 237);
    doc.text(`N° ${evento.nProyecto}`, 147, 32);

    // Tabla datos Proveedor
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    // Filas
    doc.setLineWidth(1.5);
    doc.setDrawColor(1, 42, 65);

    // Texto columna 1
    doc.text("Señor(es)", 27, 49); // texto columna 1 fila 1
    doc.text("Dirección", 27, 55); // texto columna 1 fila 2
    doc.text("Mail", 27, 61); // texto columna 1 fila 3
    doc.text("Contacto", 27, 67); // texto columna 1 fila 4

    // Texto columna 3
    doc.text("Rut", 132, 55); // texto columna 3 fila 2
    doc.text("Ciudad", 132, 61); // texto columna 3 fila 3
    doc.text("Fono", 132, 67); // texto columna 3 fila 4

    // Textos Columna 2
    doc.setFontSize(9);
    doc.setFont("Helvetica", "Normal");
    doc.text(proveedor.nombre, 52, 49); // texto columna 2 fila 1
    doc.text(proveedor.direccion, 52, 55); // texto columna 2 fila 2
    doc.text(proveedor.email, 52, 61); // texto columna 2 fila 3
    doc.text(proveedor.contacto, 52, 67); // texto columna 2 fila 4

    // Textos Columna 4
    doc.text(proveedor.rut, 152, 55); // texto columna 2 fila 2
    doc.text(proveedor.comuna, 152, 61); // texto columna 2 fila 2
    doc.text(proveedor.telefono, 152, 67); // texto columna 2 fila 3
    // Fin Tabla datos Proveedor

    // Tabla datos Hatt
    doc.setFont("Helvetica", "Bold");
    doc.text("POR LA PRESENTE SIRVASE FACTURAR A:", 25, 79);
    // Filas
    doc.setLineWidth(1.5);
    doc.setDrawColor(1, 42, 65);
    doc.line(25, 81, 185, 81); // fila 0
    doc.setLineWidth(0.45);

    // Texto columna 1
    doc.text("Razón Social", 27, 85); // texto columna 1 fila 1
    doc.text("Dirección", 27, 91); // texto columna 1 fila 2
    doc.text("Mail", 27, 97); // texto columna 1 fila 3

    // Texto columna 3
    doc.text("Rut", 132, 85); // texto columna 3 fila 2
    doc.text("Giro", 132, 91); // texto columna 3 fila 3
    doc.text("Fono", 132, 97); // texto columna 3 fila 4

    // Textos Columna 2
    doc.setFontSize(9);
    doc.setFont("Helvetica", "Normal");
    doc.text("Hatt SpA", 52, 85); // texto columna 2 fila 1
    doc.text("O'higgins 680, Galería Oliveri, Concepción", 52, 91); // texto columna 2 fila 2
    doc.text("nicolas@hatt.cl", 52, 97); // texto columna 2 fila 3

    // Textos Columna 4
    doc.text("77.102.163-8", 152, 85); // texto columna 2 fila 2
    doc.text("Gestión Comercial", 152, 91); // texto columna 2 fila 2
    doc.text("569-77097851", 152, 97); // texto columna 2 fila 3
    // Fin Tabla datos Hatt

    // Tabla datos modulos
    doc.setFont("Helvetica", "Bold");
    doc.text("LO SIGUIENTE", 25, 109);
    // Filas
    doc.setLineWidth(1.5);
    doc.setDrawColor(1, 42, 65);
    doc.line(25, 111, 185, 111); // fila 0
    doc.setLineWidth(0.45);
    doc.setDrawColor(0, 0, 0);
    doc.line(25, 117, 185, 117); // fila 1

    // Texto columna 1
    doc.text("CANTIDAD", 27, 121); // texto columna 1 fila 1
    doc.text("DETALLE", 52, 121); // texto columna 2 fila 2
    doc.text("UNIDAD", 152, 121); // texto columna 3 fila 2
    doc.text("TOTAL", 170, 121); // texto columna 4 fila 2

    doc.line(25, 123, 185, 123); // fila 1
    var splitText = doc.splitTextToSize(modulosEvento.detalle, 116);
    // var pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(11);
    var y = 127;
    var b = 127;
    for (var a = 0; a <= 5; a++) {
      doc.setFont("Helvetica", "Normal");
      doc.setFontSize(9);
      doc.text(modulosEvento.cantidad.toString(), 29, y ); // texto columna 1 fila 1
      doc.text(modulosEvento.unidad.toString(), 154, y); // texto columna 1 fila 1
      doc.text(modulosEvento.total.toString(), 172, y ); // texto columna 1 fila 1
      for (var i = 0; i < splitText.length; i++) {
        if (y > 275) {
          y = 127;
          doc.addPage();
        }
        doc.text(52, y, splitText[i]);

        y = y + 5;
      }
      b = b + 5;
      doc.line(25, y - 3, 185, y - 3); // fila 3
    }

    doc.line(25, 192, 185, 192);
    doc.setFont("Helvetica", "Bold");
    doc.text("FORMA DE PAGO", 32, 200);
    doc.setFont("Helvetica", "Normal");
    
    var splitTextFP = doc.splitTextToSize(modulosEvento.detalle, 80);
    doc.setFontSize(11);
    var y2 = 197;
    var objText = {
      align: "justify",
    };
    doc.setFont("Helvetica", "Normal");
    doc.setFontSize(9);
    for (var i2 = 0; i2 < splitTextFP.length; i2++) {
      if (y2 > 275) {
        y2 = 197;
        doc.addPage();
      }
      doc.text(66, y2, splitTextFP[i2], objText);
      y2 = y2 + 5;
    }

    doc.line(64, 192, 64, 207); // columna
    doc.line(25, 207, 185, 207); // fila
    doc.setFont("Helvetica", "Bold");
    doc.text("NETO", 152, 196);
    doc.text("IVA", 152, 200);
    doc.text("TOTAL", 152, 205);

    doc.setFont("Helvetica", "Normal");
    doc.setFontSize(9);

    doc.text("99.999.999", 170, 195); // VALOR NETO
    doc.text("99.999.999", 170, 200); // VALOR IVA
    doc.text("99.999.999", 170, 206); // VALOR TOTAL

    doc.line(150, 197, 185, 197); // fila
    doc.line(150, 202, 185, 202); // fila

    doc.line(25, 207, 185, 207); // fila
    doc.line(25, 207, 185, 207); // fila
    doc.line(25, 207, 185, 207); // fila

    // Columnas
    doc.line(25, 117, 25, 207); // columna 0
    doc.line(50, 117, 50, 192); // columna 1
    doc.line(150, 117, 150, 207); // columna 2
    doc.line(168, 117, 168, 207); // columna 3
    doc.line(185, 117, 185, 207); // columna 4

    doc.setFont("Helvetica", "Bold");
    doc.text("EVENTO:", 25, 220); 
    doc.text("ENCARGADO:", 25, 225);
    doc.text("FECHA ENVIO OC:", 25, 230); 
    doc.text("FECHA REALIZACION:", 25, 235); 
    doc.text("LUGAR REALIZACION:", 25, 240);  

    doc.text("OBSERVACIONES:", 25, 250); // 

    doc.setFont("Helvetica", "Normal");
    doc.text("Matías Troncoso.", 65, 220); 
    doc.text("12 de septiembre de 2020", 65, 225);
    doc.text("12 de septiemre de 2020", 65, 230); 
    doc.text("12 de septiemre de 2020", 65, 235); 
    doc.text("Concepción", 65, 240);  


    var splitText3 = doc.splitTextToSize(modulosEvento.detalle, 80);
    doc.setFontSize(11);
    var y3 = 250;
    var objText2 = {
      align: "justify",
    };
    doc.setFont("Helvetica", "Normal");
    doc.setFontSize(9);
    for (var i3 = 0; i3 < splitText3.length; i3++) {
      if (y3 > 275) {
        y3 = 250;
        doc.addPage();
      }
      doc.text(65, y3, splitText3[i3], objText2);
      y3 = y3 + 5;
    }


    doc.text("Nicolás Moncada P.", 153, 253); 
    doc.text("Hatt SpA", 161, 256.6);  

    doc.setLineWidth(5.0);
    doc.setDrawColor(1, 42, 65);
    doc.line(25, 270, 185, 270); // fila 0
    doc.setFont("Helvetica", "bold");

    doc.setTextColor(255, 255, 255);
    doc.text("www.hatt.cl", 100, 271.5); 
    doc.setLineWidth(0.2);
    doc.setDrawColor(255, 255, 255);
    doc.line(100, 271.8, 118, 271.8); // fila 0

    // Fin Tabla datos modulos

    // Guardar
    doc.save(`orden-compra-${evento.nProyecto}.pdf`);
  };
  return (
    <div>
      <button onClick={() => ordenCompra()} type="primary">
        Generar Orden de Compra
      </button>
    </div>
  );
};

export default App;
