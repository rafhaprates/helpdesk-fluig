function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("Codigo");
	dataset.addColumn("Categoria");
	
	dataset.addRow(new Array("1", "Suporte Protheus"));
	dataset.addRow(new Array("2", "Suporte Fluig"));
	dataset.addRow(new Array("3", "Liberação de Acessos"));
	dataset.addRow(new Array("4", "Remoção de Acessos"));
	dataset.addRow(new Array("5", "Problemas Windows"));
	dataset.addRow(new Array("6", "Problemas Impressora"));
	dataset.addRow(new Array("7", "Rede"));
	dataset.addRow(new Array("8", "Cabeamento"));
	dataset.addRow(new Array("9", "Novo Ponto"));
	dataset.addRow(new Array("10", "Manutenção Ponto atual"));
	dataset.addRow(new Array("11", "Mudança de Ponto"));
	dataset.addRow(new Array("12", "Avaliação de Estutura"));
	dataset.addRow(new Array("13", "Desenvolvimento Protheus"));
	dataset.addRow(new Array("14", "Desenvolvimento Fluig - Processos BPM"));
	dataset.addRow(new Array("15", "Suporte Programas"));
	dataset.addRow(new Array("16", "Suporte Programas Cad & Eletrical"));
	dataset.addRow(new Array("17", "Acesso Remoto"));
	dataset.addRow(new Array("18", "Instações"));
	dataset.addRow(new Array("19", "Requisições"));
	dataset.addRow(new Array("20", "Outros..."));

	
return dataset;
}function onMobileSync(user) {

}