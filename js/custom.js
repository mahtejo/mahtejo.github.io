function addTrocas(){
    var container = document.getElementById("trocas");

    var newdiv = document.createElement('div');
    newdiv.className += " row form";
    newdiv.innerHTML = "<form> \
                            <div class='form-group'> \
                                <label for='inputType' class='col-md-1 control-label'>Tipo</label> \
                                <div class='col-md-3'> \
                                    <select class='form-control' id='sel1'> \
                                        <option>Roupa</option> \
                                        <option>Brinquedo</option> \
                                    </select> \
                                </div> \
                            </div> \
                            <div class='form-group'> \
                                <label for='inputType' class='col-md-1 control-label'>Quantidade</label> \
                                <div class='col-md-3'> \
                                    <input type='text' class='form-control' id='quantidadeDoacao' placeholder='Quantidade'> \
                                </div> \
                            </div> \
                        </form>";

    container.appendChild(newdiv);
}

function confirmaTroca() {
    alert("Troca solicitada com sucesso! Você será redirecionado(a) para a página de status e em breve receberá mais informações sobre seus babycoins.");
}