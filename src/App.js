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
  };

  const { evento, proveedor } = ContextOrdenCompra;

  var doc = new jsPDF();

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
    doc.line(25, 45, 185, 45); // fila 0
    doc.setLineWidth(0.45);
    doc.setDrawColor(0, 0, 0);
    doc.line(25, 51, 185, 51); // fila 1
    doc.line(25, 57, 185, 57); // fila 2
    doc.line(25, 63, 185, 63); // fila 3
    doc.line(25, 69, 185, 69); // fila 4

    // Columnas
    doc.line(25, 45, 25, 69); // columna 0
    doc.line(50, 45, 50, 69); // columna 1
    doc.line(25, 45, 25, 69); // columna 2
    doc.line(130, 51, 130, 69); // columna 3
    doc.line(150, 51, 150, 69); // columna 4
    doc.line(185, 45, 185, 69); // columna 5

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
    doc.setDrawColor(0, 0, 0);
    doc.line(25, 87, 185, 87); // fila 1
    doc.line(25, 93, 185, 93); // fila 2
    doc.line(25, 99, 185, 99); // fila 3

    // Columnas
    doc.line(25, 81, 25, 99); // columna 0
    doc.line(50, 81, 50, 99); // columna 1
    doc.line(130, 81, 130, 99); // columna 2
    doc.line(150, 81, 150, 99); // columna 3
    doc.line(185, 81, 185, 99); // columna 4

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
    doc.line(25, 123, 185, 123); // fila 2
    doc.line(25, 129, 185, 129); // fila 2
    doc.line(25, 135, 185, 135); // fila 2
    doc.line(25, 141, 185, 141); // fila 2
    doc.line(25, 147, 185, 147); // fila 2
    doc.line(25, 153, 185, 153); // fila 2
    doc.line(25, 159, 185, 159); // fila 2
    doc.line(25, 165, 185, 165); // fila 2
    doc.line(25, 171, 185, 171); // fila 2
    doc.line(25, 177, 185, 177); // fila 2
    doc.line(25, 183, 185, 183); // fila 2
    doc.line(25, 189, 185, 189); // fila 2
    doc.line(25, 195, 185, 195); // fila 2
    doc.line(25, 201, 185, 201); // fila 2
    doc.line(25, 207, 185, 207); // fila 2

    doc.line(25, 207, 185, 207); // fila 2
    doc.line(25, 207, 185, 207); // fila 2
    doc.line(25, 207, 185, 207); // fila 2

    // Columnas
    doc.line(25, 117, 25, 207); // columna 0
    doc.line(50, 117, 50, 207); // columna 1
    doc.line(130, 117, 130, 207); // columna 2
    doc.line(155, 117, 155, 207); // columna 3
    doc.line(185, 117, 185, 207); // columna 4

    // Texto columna 1
    doc.text("CANTIDAD", 27, 121); // texto columna 1 fila 1
    doc.text("DETALLE", 52, 121); // texto columna 2 fila 2
    doc.text("UNIDAD", 132, 121); // texto columna 3 fila 2
    doc.text("TOTAL", 157, 121); // texto columna 4 fila 2

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
