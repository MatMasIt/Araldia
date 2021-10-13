var gameVars = {
    "player": {
        "name": "",
        "actionN": 0
    }
};

var audio = null;

var bool = false;
addEventListener("click", function () {
    $("#clicktobeg").hide();
    document.documentElement.requestFullscreen();
    if (bool) return false;
    if (!bool) bool = true;
    $("#splashImg").show();
    initSplash(0, function ok() {
        audio = new Audio('music/beepintro.mp3');
        audio.play();
        setTimeout(function () {
            $("#splash").fadeOut();
            audio.src = 'music/Rolemusic - The Black Kitty.mp3';
            audio.loop = true;
            audio.play();
        }, 3000);
    });

});
function deAudio(time = 10) {
    try {
        //console.log(audio.volume);
        if (audio.volume > 0) {
            audio.volume -= 0.01;
            setTimeout(deAudio, 10 * time);
        }

    } catch (error) {
        audio.volume = 0;
    }
}
var text, parser, xmlDoc;
text = `<?xml version="1.0" encoding="utf-8"?>
<Araldia>
<values>
    <value>
        <name>health</name>
        <title>Salute</title>
        <description>Coff.. coff.. Una popolazione in salute potrebbe essere utile</description>
        <min>0</min>
        <max>100</max>
        <default>100</default>
    </value>
    <value>
        <name>economy</name>
        <title>Economia</title>
        <description>Potresti voler guardare questo indicatore ogni tanto</description>
        <min>0</min>
        <max>100</max>
        <default>100</default>
    </value>
    <value>
        <name>consensus</name>
        <title>Consenso</title>
        <description>Il tuo consenso da parte della popolazione. Se vuoi fare qualcosa davvero ti può essere d'aiuto</description>
        <min>0</min>
        <max>100</max>
        <default>100</default>
    </value>
    <value>
        <name>security</name>
        <title>Sicurezza</title>
        <description>Sono al sicuro in parlamento. Vero?</description>
        <min>0</min>
        <max>100</max>
        <default>100</default>
    </value>
</values>
<sections>
    <events>
    </events>
    <scenes>
        <scene>
            <name>drogaStay</name>
            <title>Scandalo di Governo</title>
            <description>
                    <sectionGroup	chance="100">
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="-15" />
                                        Viene condannato in primo grado
                            </section>
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="+10" />
                                        <set who="levels" what="security" delta="+5" />
                                        Viene assolto in primo grado
                            </section>
                            
                        </sectionGroup>
        </description>
        <choices>
                <choice>
                    <title>Ok</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
            </choices>
        </scene>
        <scene>
            <name>drogaGo</name>
            <title>Scandalo di Governo</title>
            <description>
                    <sectionGroup	chance="100">
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="+10" />
                                    <set who="levels" what="security" delta="+10" />
                                        Viene condannato in primo grado
                            </section>
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="-15" />
                                        Viene assolto in primo grado
                            </section>
                            
                        </sectionGroup>
        </description>
        <choices>
                <choice>
                    <title>Ok</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
            </choices>
        </scene>
        <scene>
            <name>scandolaStay</name>
            <title>Scandalo di Governo</title>
            <description>
                    <sectionGroup	chance="100">
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="-15" />
                                        Viene condannato in primo grado
                            </section>
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="+5" />
                                    <set who="levels" what="security" delta="+5" />
                                        Viene assolto in primo grado
                            </section>
                            
                        </sectionGroup>
        </description>
        <choices>
                <choice>
                    <title>Ok</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
            </choices>
        </scene>
        <scene>
            <name>randVacc</name>
            <title>Vaccino</title>
                <description>
                    <sectionGroup	chance="100">
                            <section chance="50">
                                    <set who="levels" what="health" delta="-15" />
                                    Il vaccino fallisce e muoino 50'000 persone
                            </section>
                            <section chance="50">
                                    <set who="levels" what="health" delta="+20" />
                                        Il  vaccino risulta particolarmente efficace
                            </section>
                            
                        </sectionGroup>
        </description>
        <choices>
                <choice>
                    <title>Ok</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
            </choices>
        </scene>
        <scene>
            <name>scandolaGo</name>
            <title>Scandalo di Governo</title>
            <description>
                    <sectionGroup	chance="100">
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="+10" />
                                    <set who="levels" what="security" delta="+10" />
                                        Viene condannato in primo grado
                            </section>
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="-15" />
                                        Viene assolto in primo grado
                            </section>
                            
                        </sectionGroup>
        </description>
        <choices>
                <choice>
                    <title>Ok</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
            </choices>
        </scene>
        <scene>
            <name>randVesc</name>
            <title>Vescovo di Napoly</title>
            <description>
                    <sectionGroup	chance="100">
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="-20" />
                                        Il reato viene scoperto dal giornalista Aldo Giacomi, che ti accusa pubblicamente
                            </section>
                            <section chance="50">
                                    <set who="levels" what="consensus" delta="+5" />
                                        Il reato viene insabbiato con successo e il vescovo contribuisce alla tua propaganda
                            </section>
                            
                        </sectionGroup>
        </description>
        <choices>
                <choice>
                    <title>Ok</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
            </choices>
        </scene>
    </scenes>
    <questions>
        <question>
            <name>misureRestrittive</name>
            <title>Misure restrittive</title>
            <description>
            Considerata l'attuale situazione epidemiologica, è necessario rafforzare le misure restrittive?
            </description>
            <choices>
                <choice>
                    <title>Sì</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="economy" delta="-10" />
                        <set who="levels" what="health" delta="+10" />
                        <set who="virus" what="Rt" delta="-0,2" />
                    </effects>
                </choice>
                <choice>
                    <title>No</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="economy" delta="+10" />
                        <set who="levels" what="health" delta="-10" />
                        <set who="virus" what="Rt" delta="+0,2" />
                    </effects>
                </choice>
            </choices>
        </question>
    
        <question>
            <name>CrostaSconcordia</name>
            <title>Nave incagliata</title>
            <description>
                La nave Crosta Discordia è rimasta incagliata a largo dell'isola del Ciglio, con a capo il Comandante Scattino. Lo scafo ha imbarcato acqua e la nave potrebbe affondare
                <br />
                Che cosa fai?
            </description>
            <choices>
                <choice>
                    <title>Fai sì che la nave venga rimossa e le sue parti riutilizzate</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+15" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>No, costa troppo rimuoverla, meglio lasciarla lì</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-15" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>Partitini</name>
            <title>Riforma elettorale</title>
            <description>
                Un gruppo di alcuni senatori e deputati ha proposto una riforma costituzionale al sistema elettorale, che sfavorirebbe i partiti di piccole dimensioni
                <br />
                Come desideri procedere?
            </description>
            <choices>
                <choice>
                    <title>Ti dichiari favorevole</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                    </effects>
                </choice>
                <choice>
                    <title>Meglio osteggiare la riforma, d'altronde alcuni partiti che fanno parte della tua allenaza sono piuttosto ridotti</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>Sindacati</name>
            <title>Sindacati</title>
            <description>
                Il Presidente del Sindacato dei Lavoratori Part-Time, Sergio Costa, ti chiede un incontro per stabilire un punto di accordo sulle condizioni lavorative di coloro che rappresenta
            </description>
            <choices>
                <choice>
                    <title>Che dialogo inutile, sarebbe tempo sprecato</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="economy" delta="+10" />
                        <set who="levels" what="consensus" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Va bene, incontriamoci!</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="economy" delta="-10" />
                        <set who="levels" what="consensus" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>Sparatoria in centro a Mylano</name>
            <title>Sparatoria in centro a Mylano</title>
            <description>
                Un poliziotto fuori servizio di nome Giorgio Sinodi ha utilizzato la sua pistola d'ordiananza per uccidere la moglie che lo aveva precedentemente tradito.
                <br />
                Cosa fai?
            </description>
            <choices>
                <choice>
                    <title>Niente, non sono affari miei</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
                <choice>
                    <title>Ti esponi pubblicamente a favore del poliziotto</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-15" />
                    </effects>
                </choice>
            </choices>
        </question>
    
        <question>
            <name>antipandemia1</name>
            <title>Antipandemia</title>
            <description>
                Il Ministro della Salute ti chiede di stanziare fondi per la prevenzione della malattia.
            </description>
            <choices>
                <choice>
                    <title>Accetti la richiesta, nonostante il costo</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="health" delta="+10" />
                        <set who="levels" what="economy" delta=" -10" />
                    </effects>
                </choice>
                <choice>
                    <title>Rifiuti la richiesta, per poter utilizzare il denaro diversamente</title>
                    <effects>
                        <goto question="next" />
                        <goto question="next" />
                        <set who="levels" what="health" delta="-10" />
                        <set who="levels" what="economy" delta=" +10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>Autostrade</name>
            <title>Autostrade</title>
            <description>
                Il Ministro dei Trasporti ti chiede di stanziare fondi per la manutenzione delle autostrade.        </description>
            <choices>
                <choice>
                    <title>Accetti la richiesta, nonostante il costo</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="sicurezza" delta="+10" />
                        <set who="levels" what="economy" delta=" -10" />
                    </effects>
                </choice>
                <choice>
                    <title>Rifiuti la richiesta, per poter utilizzare il denaro diversamente</title>
                    <effects>
                        <goto question="next" />
                        <goto question="next" />
                        <set who="levels" what="economy" delta="-10" />
                        <set who="levels" what="health" delta=" +10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
        <question>
            <name>Cesaropapismo</name>
            <title>Cesaropapismo</title>
            <description>
                La Chiesa Assiomatica si propone di procacciarti il supporto della popolazione, pur di impedire la ricerca sulle cellule embrionali.
                <br />
                Cosa decidi di fare?
            </description>
            <choices>
                <choice>
                    <title>Accetti la proposta</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="health" delta="-10" />
                        <set who="levels" what="consensus" delta=" +10" />
                    </effects>
                </choice>
                <choice>
                    <title>Beh ecco...</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                        <set who="levels" what="health" delta=" +10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
        <question>
            <name>cesaropapismo</name>
            <title>Cesaropapismo</title>
            <description>
                La Chiesa Assiomatica si propone di procacciarti il supporto della popolazione, pur di impedire la ricerca sulle cellule embrionali.
                <br />
                Cosa decidi di fare?
            </description>
            <choices>
                <choice>
                    <title>Accetti la proposta</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="health" delta="-10" />
                        <set who="levels" what="consensus" delta="+10" />
                    </effects>
                </choice>
                <choice>
                    <title>Beh ecco...</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                        <set who="levels" what="health" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
        <question>
            <name>crocifissi</name>
            <title>Crocifissi nelle scuole</title>
            <description>
                Un gruppo crescente di persone ti chiede di considerare se tenere o rimuovere i crocifissi nelle scuole.
            </description>
            <choices>
                <choice>
                    <title>Ci penso immediatamente</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Certo ! (Magari il prossimo governo se ne occuperà)</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
        <question>
            <name>crocifissi</name>
            <title>Crocifissi nelle scuole</title>
            <description>
                Un gruppo crescente di persone ti chiede di considerare se tenere o rimuovere i crocifissi nelle scuole.
            </description>
            <choices>
                <choice>
                    <title>Ci penso immediatamente</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Certo ! (Magari il prossimo governo se ne occuperà)</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
        <question>
            <name>desertificazione</name>
            <title>Desertificazione </title>
            <description>
                La regione della Sciglia si sta progressivimanente desertificando
                <br />
                Cosa fai?
            </description>
            <choices>
                <choice>
                    <title>Non ci possiamo fare nulla</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-5" />
                        <set who="levels" what="economy" delta="-5" />
                    </effects>
                </choice>
                <choice>
                    <title>Facciamo qualcosa!</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-5" />
                        <set who="levels" what="economy" delta="+5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
        <question>
            <name>droga</name>
            <title>Caso di droga nella tua alleanza di Parlamento</title>
            <description>
                Il tuo ministro dell'interno Giovanni Foresta è sotto inchiesta per aver favorito, grazie alla sua influenza, la distribuzione di droga sul suolo Araldico
                <br />
                Come desideri procedere?
            </description>
            <choices>
                <choice>
                    <title>Rimane in ufficio finchè condannato, sempre che sia colpevole</title>
                    <effects>
                        <goto scene="drogaStay" />
                    </effects>
                </choice>
                <choice>
                    <title>Fuori dal mio governo</title>
                    <effects>
                        <goto scene="drogaGo" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>esercito</name>
            <title>Nuove forze armate?</title>
            <description>
                Il Generale Padruolo ti propone di finanziare delle attività funzionali al rafforzamento dell'esercito Araldico
                <br />
                Cosa fai?
            </description>
            <choices>
                <choice>
                    <title>Accetti e concedi il finanzimento</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="security" delta="+10" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Rifiuti senza dilungarti troppo sulle motivazioni</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>fallimento</name>
            <title>Fallimento di Jovani S.p.A.</title>
            <description>
                Elettrotecnica Jovani S.p.A., una grande realtà industriale con sede a Drato, sta spostando tutti i suoi impianti produttivi in Bangladesh.
                <br />
                I sindacati esercitano una forte pressione per impedire che ciò accada.
            </description>
            <choices>
                <choice>
                    <title>Impedisci lo spostamento con incentivi statali</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+10" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Ah perchè in Araldia si lavora anche?</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>femministe1</name>
            <title>Movimento femminista</title>
            <description>
                Il partito %randPartyName%, sostenitore dei diritti delle donne, chiede uguaglianza tra gli stipendi di colleghi di differente sesso.
                <br />
                Il Ministro del Lavoro Giorgio Crispi lascia a te la scelta finale.
            </description>
            <choices>
                <choice>
                    <title>Accogli con gioia la richiesta e prendi provvedimenti</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+10" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Ritieni che sia una condizione già in atto</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>fuggitivo</name>
            <title>Fuggitivo proveniente dalla Francia</title>
            <description>
                Un noto criminale è riuscito a fuggire da un carcere di massima sicurezza in Francia, recandosi in Araldia. La Francia ti chiede di cercarlo all'interno tuoi confini.
                <br />
                Cosa fai?
            </description>
            <choices>
                <choice>
                    <title>Porti avanti una ricerca nelle regioni limitrofe al confine</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                        <set who="levels" what="security" delta="+5" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Decidi che non ne vale il costo</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-5" />
                        <set who="levels" what="security" delta="-5" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>giornalista</name>
            <title>Giornalista ficcanaso</title>
            <description>
                Il giornalista Girolamo Preti ha scritto un articolo sulla tua attuale gestione del Paese
                <br />
                Cosa fai?
            </description>
            <choices>
                <choice>
                    <title>Accetti le critiche e lo inviti a discuterne meglio di fronte ad una tazza di Caffé</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                    </effects>
                </choice>
    
                <choice>
                    <title>Ti dimostri fortemente irritato dalle sue affermazioni ed eviti il dialogo</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-5" />
                    </effects>
                </choice>
    
                <choice>
                    <title>Lo attacchi pubblicamente e lo fai licenziare grazie alla tua influenza</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="security" delta="+5" />
                        <set who="levels" what="consensus" delta="-15" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>hello.joke</name>
            <title>Is there anybody in there?</title>
            <description>
                Out of the corner of my eye
    
                I turned to look but it was gone
                
                I cannot put my finger on it now
                
                The child is grown
                
                The dream is gone
                
                I have become comfortably numb
            </description>
            <choices>
                <choice>
                    <title>What?</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
                <choice>
                    <title>Cosa?</title>
                    <effects>
                        <goto question="next" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>inParlamento</name>
            <title>In parlamento</title>
            <description>
               %randPartyName%, segretario di %randPartySecretary%, critica l'operato del tuo governo riguardo alla scuola.
            </description>
            <choices>
                <choice>
                    <title> Haha, un paritino al 4%</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+10" />
                        <set who="levels" what="security" delta="-5" />
                    </effects>
                </choice>
                <choice>
                    <title>Cos'è la scuola?</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                        <set who="levels" what="security" delta="+5" />
                    </effects>
                </choice>
                <choice>
                    <title>Non è vero</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                        <set who="levels" what="security" delta="-3" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>milva</name>
            <title>Stabilimento MIlva</title>
            <description>
                Uno stabilimento della Milva locato a Traranto sta causando un aumento consistente dei casi di cancro in tutta la popolazione la circostante.
                <br />
                Cosa fai?
            </description>
            <choices>
                <choice>
                    <title>Proponi la chiusura dello stabilimento</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="health" delta="+10" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Insisti sulla necessità di mantenere operativo lo stabilimento</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="health" delta="-10" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
            </choices>
            <choice>
                <title>Istituisci un commissario che si occupi della questione</title>
                <effects>
                    <goto question="next" />
                </effects>
            </choice>
        </question>
    
    
    
        <question>
            <name>manifestazione</name>
            <title>Manifestazione di fronte a Palazzo Thigi</title>
            <description>
                Un gruppo di persone sta generando scompiglio di fronte alla sede della Presidenza del Consiglio, in protesta per le attuali condizioni lavorative.
                <br />
                Che cosa fai?
            </description>
            <choices>
                <choice>
                    <title>Disperdi i manifestanti</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="security" delta="+10" />
                        <set who="levels" what="consensus" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Accetti che una delegazione venga a discutere all'interno del Palazzo</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                        <set who="levels" what="security" delta="-5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
        <question>
            <name>misureSanitarie</name>
            <title>Misure sanitarie</title>
            <description>
                Il Ministro della Salute ti chiede di stanziare fondi per misure sanitarie più stringenti
                <br />
                Cosa decidi?
            </description>
            <choices>
                <choice>
                    <title>Accetti la richiesta, nonostante il costo</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="health" delta="+10" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Ritieni che sia una condizione già in atto</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="health" delta="-10" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>Monsatero</name>
            <title>Monastero</title>
            <description>
                Il Phapa ti propone la ristrutturazione di un antico monastero situato sugli Appendini. Uhmm....
            </description>
            <choices>
                <choice>
                    <title>Acconsenti e concedi il denaro</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+10" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Declini, invitando il Phapa ad attuare il rinnovamento del monastero con i propri fondi</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>open</name>
            <title>Open Source</title>
            <description>
                Il ministro per la trasformazione digitale propone di imporre l'utilizzo di software open source per tutti gli enti pubblici
            </description>
            <choices>
                <choice>
                    <title>Cambiate tutto subito</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+10" />
                        <set who="levels" what="economy" delta="-15" />
                    </effects>
                </choice>
                <choice>
                    <title>No, è troppo complicato</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-5" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
                <choice>
                    <title>Procediamo con un cambiamento graduale</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                        <set who="levels" what="security" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>ostruzionismo</name>
            <title>Ostruzionismo in parlamento</title>
            <description>
               
                Il partito %randPartyName% si oppone alla messa in atto di misure restrittive da parte del tuo governo.
    
                %randPartySecretary%, in un'intervista radiofonica ha dichiarato
                
                «%playerName% è un incompetente autoritario e deve essere fermato il prima possibile»
                
                Come pensi di reagire a quest'accusa
    
            </description>
            <choices>
                <choice>
                    <title>Cerca di negoziare con %randPartyName%</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                        <set who="levels" what="health" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Prenditi gioco di %randPartySecretary% in diretta televisiva in un programma di Phazio</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                        <set who="levels" what="health" delta="+5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>petroliera</name>
            <title>Petroliera incagliata</title>
            <description>
                Un nave che trasportava petrolio ha riportato una faglia nello scafo dopo essersi scontrata ed incagliata nella costa amalfitana, cominciando a riversare il suo contenuto nel mare.
                            <br />
                Cosa fai?
            </description>
            <choices>
                <choice>
                    <title>Ottieni che la nave venga riparata</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+10" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Non prendi altre contromisure</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
        <question>
            <name>ponte</name>
            <title>Crollo ponte Gianni</title>
            <description>
                Il Ponte Gianni è crollato da un mese ormai. I cittadini ti chiedono di trovare il colpevole Come desideri procedere?
            </description>
            <choices>
                <choice>
                    <title>Attui un procedimento volto a trovare i reali responsabili, anche se costoso</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                        <set who="levels" what="security" delta="+5" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Fuori dal mio governo</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-5" />
                        <set who="levels" what="security" delta="-5" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>randomChemistryTrivia</name>
            <title>Acido perclorico</title>
            <description>
                Qual è di questi?
                    </description>
            <choices>
                <choice>
                    <title>HClO3</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>HClO4</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+10" />
                    </effects>
                </choice>
                <choice>
                    <title>HClO2</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>Riciclaggio</name>
            <title>Riciclaggio</title>
            <description>
                Il Ministro dell'economia Fabrizio Briziti chiede di aiutarlo a riciclare del denaro proveniente dallo spaccio di droga. 
                <br />
                Come ti comporti?
                    </description>
            <choices>
                <choice>
                    <title>Accetti la richiesta, consapevole dell'incentivo al commercio di droga</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="health" delta="-10" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
                <choice>
                    <title>Rifiuti la richiesta e denunci il Ministro</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>riforma</name>
            <title>Riforma</title>
            <description>
                L'Europa ti chiede una serie di riforme sul piano economico
                            <br />
                Come desideri procedere?
                            </description>
            <choices>
                <choice>
                    <title>Si è vero, sono necessarie, ma non tutti potrebbero comprenderne l'efficacia</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                        <set who="levels" what="economy" delta="+10" />
                    </effects>
                </choice>
                <choice>
                    <title>No, non servono</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+10" />
                        <set who="levels" what="economy" delta="-10" />
                    </effects>
                </choice>
                <choice>
                    <title>Basta, fuori dall'Europa</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-10" />
                        <set who="levels" what="economy" delta="-15" />
                        <set who="levels" what="security" delta="-15" />
                        <set who="levels" what="health" delta="-10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>scandola</name>
            <title>Scandalo di governo</title>
            <description>
                Il tuo ministro dell'interno, Giovanni Giorgio è sotto inchiesta per corruzione e abuso d'ufficio.                      
                  <br />
                Come desideri procedere?
                            </description>
            <choices>
                <choice>
                    <title>Rimane in ufficio finchè condannato</title>
                    <effects>
                        <goto scene="scandolaStay" />
                    </effects>
                </choice>
                <choice>
                    <title>Fuori dal mio governo</title>
                    <effects>
                        <goto scene="scandolaGo" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>terremoto</name>
            <title>Terremoto nelle SMarche</title>
            <description>
                Terremoto nelle SMarche              <br />
                Come desideri procedere?
                            </description>
            <choices>
                <choice>
                    <title>Ti rechi personalmente sul luogo e prometti aiuto e sostegni</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="+5" />
                    </effects>
                </choice>
                <choice>
                    <title>Lo consideri uno spreco del tuo tempo e rimani in ufficio</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="consensus" delta="-5" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>vaccino1</name>
            <title>Vaccino non testato</title>
            <description>
                Un Paese straniero ti propone di utilizzare su larga scala un vaccino non testato sulla tua popolazione. 
                <br />
                Come ti comporti?
                            </description>
            <choices>
                <choice>
                    <title>Ti dichiari favorevole</title>
                    <effects>
                        <goto scene="randVacc" />
                    </effects>
                </choice>
                <choice>
                    <title>Ti dichari sfavorevole</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="security" delta="+10" />
                        <set who="levels" what="consensus" delta="-10" />
                    </effects>
                </choice>
            </choices>
        </question>
    
    
    
        <question>
            <name>vescovo</name>
            <title>Vescovo di Napoly</title>
            <description>
                Il vescovo di Napoly è stato accusato di molestie sessuali da parte di un gruppo di giovani ragazzi. Egli ti chiede di insabbiare la questione            <br />
                Come ti comporti?
                            </description>
            <choices>
                <choice>
                    <title>Accetti la richiesta e insabbi la questione</title>
                    <effects>
                        <goto scene="randVesc" />
                    </effects>
                </choice>
                <choice>
                    <title>Rifiuti la richiesta e lo denunci pubblicamente, pur sapendo lo scompiglio che ciò porterebbe</title>
                    <effects>
                        <goto question="next" />
                        <set who="levels" what="security" delta="-5" />
                        <set who="levels" what="consensus" delta="+10" />
                    </effects>
                </choice>
            </choices>
        </question>
    </questions>
</sections>
<parties>
    <party>
        <name>partito_giallo</name>
        <title>Partito Giallo</title>
        <secretary>Domenico Sansovino</secretary>
        <description>Un partito di centro moderato</description>
        <motto>Viva la libertàaaaa iaaaaaaaa</motto>
    </party>
    <party>
        <name>no_al_5g</name>
        <title>No al 5G</title>
        <secretary>Giovanna Vogheri</secretary>
        <description>Un partito il cui interesse esclusivo è bandire il 5G, quale emissario di Satana</description>
        <motto>Uniti nella nostra APERTURA MENTALE</motto>
    </party>
    <party>
        <name>partito_anarchico</name>
        <title>Partito anarchico</title>
        <secretary>Carlo Massimo</secretary>
        <description>Fanno quello che vogliono</description>
        <motto>Siamo anarchici ma non quando votiamo</motto>
    </party>
    <party>
        <name>il_popolo_delle_mamme</name>
        <title>Il popolo delle mamme</title>
        <secretary>Silvia Pavesini</secretary>
        <description>Anche questi fanno quello che vogliono </description>
        <motto>I bambiniiiiiiiii</motto>
    </party>
    <party>
        <name>laser</name>
        <title>Laser a cinqui euri</title>
        <secretary>Aieie Brasorx</secretary>
        <description>Usano i laser in parlamento per accecare l'opposizione</description>
        <motto>Solo a cinqui euri, beli i laser</motto>
    </party>
    <party>
        <name>totocalcio</name>
        <title>Totocalcio</title>
        <secretary>Toto Rinaldi</secretary>
        <description>Scommettono sulla loro vittoria, per ora hanno solo perso</description>
        <motto>Scommetti sul tuo futuro (nel frattempo organizziamo i brogli)</motto>
    </party>
    <party>
        <name>forza_vecchia</name>
        <title>Forza Vecchia</title>
        <secretary>Federico VII di Salerno</secretary>
        <description>Medievisti puri</description>
        <motto>Si stava meglio quando si stava peggio</motto>
    </party>
    <party>
        <name>Ikea</name>
        <title>Sveglia dell' IKEA</title>
        <secretary>Äntligen Färgglad</secretary>
        <description>Nessuno capisce quello che dicono</description>
        <motto>När är det bäst att besöka oss?</motto>
    </party>
    <party>
        <name>sedia girevole</name>
        <title>Sedia Girevole</title>
        <secretary>Francesco Eppson</secretary>
        <description>Girano tutto il giorno in parlamento sulle poltrone</description>
        <motto>Uiiiiiiiii haha</motto>
    </party>
    <party>
        <name>basta_powerpoint</name>
        <title>Basta PowePoint</title>
        <secretary>Stefano Mansioni</secretary>
        <description>Odiano PowePoint</description>
        <motto>BASTA POWERPOINT BASTAAAAAAAAAA: Usate Prezi por favor</motto>
    </party>
</parties>
<viruses>
    <virus>
        <name>covvidi-21</name>
        <title>COVIDDI-21</title>
        <levels>
            <Rt>1</Rt>
            <lethality>2.5</lethality>
        </levels>
        <infoboxes>
            <infobox>Gli scienziati dell'Accademia di Salomone hanno scoperto un nuovo coronavirus. Esso è un virus ad RNA che si trasmette per via aerea ed è potenzialmente pandemico</infobox>
            <infobox>I sintomi inziali sono solitamente tosse, febbre, mal di testa e vomito, ma le conseguenze possono essere ben più gravi.</infobox>
            <infobox>L'Istituto Nazionale di Statistica ha calcolato che questo virus ha una letalità del 1% e un Rt di 2,5. Gli esperti ti chiedono di adottare misure di sicurezza per ridurne la diffusione</infobox>
            <infobox>Secondo le ricerche condotte dall'Accademia di Salomone, questo virus è fuggito dal laboratorio di microbiologia "Matteo Koothrappali"</infobox>
            <infobox>Grazie al lavoro del team di Roberto Marconi è stato scoperto il meccanismo di azione del virus, basato sulla proteina NIKE</infobox>
            <infobox>Dopo un accurata indagine realizzata dall'Accademia di Salomone in collaborazione con i servizi segreti, si è scoperto che in realtà questo virus viene dagli armadilli</infobox>
            <infobox>È stato scoperto un vaccino!</infobox>
        </infoboxes>
        <mutations>
            <mutation>
                <name>toriniese</name>
                <title>Variante toriniese</title>
                <description>Nella periferia di Torinia, abitata da molti no-mask, si è sviluppata una nuova variante del virus, ancora più contagiosa</description>
                <levels>
                    <Rt>0.9</Rt>
                    <lethality>3.5</lethality>
                </levels>
            </mutation>
            <mutation>
                <name>turcomanna</name>
                <title>Variante turcomanna</title>
                <description>È stata scoperta una nuova variante del virus proveniente dalla fiera nazionale del cavallo turcomanno. È meno molto più mortale. Metti al riparo gli anziani e le categorie fragili!</description>
                <levels>
                    <Rt>1,5</Rt>
                    <lethality>10</lethality>
                </levels>
            </mutation>
            <mutation>
                <name>pasquale</name>
                <title>Variante pasquale</title>
                <description>Durante le celebrazioni religiose pasquali si è diffusa una nuova variante. È molto più pericolosa delle altre e sarà difficile estirparla</description>
                <levels>
                    <Rt>3</Rt>
                    <lethality>10</lethality>
                </levels>
            </mutation>
            <mutation>
                <name>falciforme</name>
                <title>Variante falciforme</title>
                <description>Questa variante si chiama così per la strana forma che assume la proteina NIKE modificata. Molto contagiosa ma con una mortalità molto più bassa.</description>
                <levels>
                    <Rt>3,5</Rt>
                    <lethality>0,5</lethality>
                </levels>
            </mutation>
            <mutation>
                <name>vip</name>
                <title>Variante vip</title>
                <description>I locali mondani dell'isola della Gherba non hanno rispettato il tuo ultimo DPCM, per questo si è diffusa una nuova variante</description>
                <levels>
                    <Rt>2</Rt>
                    <lethality>2,75</lethality>
                </levels>
            </mutation>
        </mutations>
    </virus>
</viruses>
<misc>
<welcomeMessage scrollDelay="400" duration="10" direction="up">
    Araldia, 2312
    ----Stampa associata----
    Il nuovo presidente si insedia, il paese attende ansioso cambiamenti dal governo
    </welcomeMessage>
</misc>
</Araldia>
`;
var lastEff = [];
var deadlyError = false;
function chunkString(str, length) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
}
function brLine(lines) {
    return "<p class=\"wbr\">" + lines + "</p>";
}
// allow for nested structured data through "|" operator
function rdRead(who, how) {
    var v = gameVars[randomInteger(0, Object.keys(gameVars).length - 1)];

}

function recurseset(who, what, delta = null, to = null) {
    var evalSensitive = "";
}
function selBuilder(dName, arrselector) {
    var begin = dName, list = arrselector.split("|");
    for (var i = 0; i < list.length; i++) {
        if (list[i] == "rand") begin += "[randomInteger(0," + begin + ".length)]";
        else if (!isNaN(parseInt(list[i]))) begin += "[" + list[i] + "]";
        else begin += "[\"" + list[i] + "\"]";
    }
    return begin;
}

function recurseget(who, what) {
    //deprecated
    var ac = what.split("|")
    if (gameVars[who] == undefined) gameVars[who] = {};
    var cVal = gameVars[who][what[0]];
    for (var i = 1; i < ac.length; i++) {
        if (parseInt(ac[i])) cVal = cVal[parseInt(ac[i])];
        else if (ac[i] == "rand") cVal = cVal[randomInteger(0, cVal.length)];
        else cVal = cVal[ac[i]];
        if (cVal === undefined) cVal = {};
    }
    if (cVal === undefined) return null;
    return cVal;
}
function gvRead(who, what) {
    if (gameVars[who] == undefined) return 0;
    if (gameVars[who][what] == undefined) return 0;
    return gameVars[who][what];
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function print(who, what) {
    return gvRead(who, what) ? gvRead(who, what) : "";
}
function set(who, what, delta = null, to = null) {
    if (gameVars[who] == undefined) gameVars[who] = {};
    if (delta != null) {
        if (gameVars[who][what] == undefined) gameVars[who][what] = 0;
        gameVars[who][what] += parseInt(delta);
    }
    else {
        gameVars[who][what] = to;
    }
    if (who == "levels") {
        if (parseInt(gvRead(who, what)) > 100) {
            gameVars[who][what] = 100;
        }
        else if (parseInt(gvRead(who, what)) < 0) {
            gameVars[who][what] = 0;
            gameOver();
        }
        if (who == "levels") updateLevelGraphically(what, gameVars[who][what])
    }
    else if (who == "virus" && what == "letality" || what == "hospitalizationRate" || what == "transmissionSpeed") {
        if (parseInt(gvRead(who, what)) > 100) {
            gameVars[who][what] = 100;
        }
        else if (parseInt(gvRead(who, what)) < 0) {
            gameVars[who][what] = 100;
        }
    }
}
function createXPathFromElement(elm) {
    var allNodes = document.getElementsByTagName('*');
    for (var segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) {
        if (elm.hasAttribute('id')) {
            var uniqueIdCount = 0;
            for (var n = 0; n < allNodes.length; n++) {
                if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
                if (uniqueIdCount > 1) break;
            };
            if (uniqueIdCount == 1) {
                segs.unshift('id("' + elm.getAttribute('id') + '")');
                return segs.join('/');
            } else {
                segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
            }
        } else if (elm.hasAttribute('class')) {
            segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
        } else {
            for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
                if (sib.localName == elm.localName) i++;
            };
            segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
        };
    };
    return segs.length ? '/' + segs.join('/') : null;
};
var lIImplCache = 0, partyIndex = 0;
function implicitVreplace(text) {
    if (gameVars.player.actionN != lIImplCache) {
        lIImplCache = gameVars.player.actionN;
        partyIndex = randomInteger(0, gameVars.parties.length - 1);
    }

    text = "<a class=\"partyH\" data-party-index=\"" + partyIndex + "\">" + text.replace("%randPartyName%", gameVars.parties[partyIndex].name) + "</a>";
    text = "<a class=\"partyH\" data-party-index=\"" + partyIndex + "\">" + text.replace("%randPartySecretary%", gameVars.parties[partyIndex].secretary) + "</a>";
    text = text.replace("%playerName%", gameVars.player.name);
    return text;
}

function cTagRecursive(tag, iteration = (-1)) {
    iteration++;
    if (iteration == 0) {
        /*cleanup*/
        var l = tag.getElementsByTagName("sectionGroup");
        for (var it = 0; it < l.length; it++) {
            l[it].made = false;
        }
    }
    html = "";
    var currentTag = null, quitDo = false;
    for (var i = 0; tag.childNodes.length; i++) {
        currentTag = tag.childNodes[i];
        if (currentTag == undefined) return html;
        if (currentTag.nodeName == "#comment") continue;
        if (currentTag.nodeName == "#text") {
            var p = currentTag.parentNode;
            while (p != null && p.nodeName != "description" && p.nodeName != "title" && p.nodeName != "section") {
                p = p.parentNode;
            }
            if (p == null) continue;
            switch (p.nodeName) {
                case "description":
                    html += brLine(implicitVreplace(currentTag.textContent)) + "<br />";
                    break;
                case "title":
                    if (p.parentNode.nodeName == "choice") continue;
                    html += "<h3>" + implicitVreplace(currentTag.textContent) + "</h3><br />";
                    break;
                case "section":
                    html += brLine(implicitVreplace(currentTag.textContent)) + "<br />";
                    break;
            }

        }
        else if (currentTag.nodeName == "if" || currentTag.nodeName == "elseif") {
            if (currentTag.parentNode.nodeName == "event" || currentTag.parentNode.nodeName == "question" || currentTag.parentNode.nodeName == "scene" && currentTag.childNodes.length == 0) {
                quitDo = true;
            }
            else if (currentTag.parentNode.nodeName == "triggers") {
                currentTag.setAttribute("who", "levels");
                currentTag.setAttribute("what", currentTag.parentNode.parentNode.getElementsByTagName("name")[0].textContent);
            }
            if (currentTag.hasAttribute("is")) {
                if (currentTag.attributes["is"].value == gvRead(currentTag.attributes["who"].value, currentTag.attributes["what"].value)) {
                    html += cTagRecursive(currentTag, iteration);

                }
                else if (quitDo) {
                    return false;
                }
            }
            else if (currentTag.hasAttribute("lessThan")) {
                if (currentTag.attributes["lessThan"].value < gvRead(currentTag.attributes["who"].value, currentTag.attributes["what"].value)) {

                    html += cTagRecursive(currentTag, iteration);

                }
                else if (quitDo) {
                    return false;
                }
            }
            else if (currentTag.hasAttribute("moreThan")) {
                if (currentTag.attributes["moreThan"].value > gvRead(currentTag.attributes["who"].value, currentTag.attributes["what"].value)) {
                    html += cTagRecursive(currentTag, iteration);

                }
                else if (quitDo) {
                    return false;
                }

            }
            else if (currentTag.hasAttribute("lessOrEqual")) {
                if (currentTag.attributes["lessOrEqual"].value <= gvRead(currentTag.attributes["who"].value, currentTag.attributes["what"].value)) {
                    html += cTagRecursive(currentTag, iteration);

                }
                else if (quitDo) {
                    return false;
                }
            }
            else if (currentTag.hasAttribute("moreOrEqual")) {
                if (currentTag.attributes["moreOrEqual"].value >= gvRead(currentTag.attributes["who"].value, currentTag.attributes["what"].value)) {
                    html += cTagRecursive(currentTag, iteration);

                }
                else if (quitDo) {
                    return false;
                }
            }
            else if (quitDo) {
                return false;
            }
        }
        else if (currentTag.nodeName == "section") {
            if (currentTag.parentNode.made) continue;
            var doForce = false;
            if (currentTag.parentNode.nodeName == "sectionGroup" && /* deprecated currentTag.parentNode.attributes["atLeastOne"].value == "true"*/ true) {
                var c = currentTag.nextSibling;
                while (c != null && c.nodeName != "section") {
                    c = c.nextSibling;
                }
                if (c == null) {
                    doForce = true;
                }
            }
            if (currentTag.attributes["chance"].value < randomInteger(0, 99) || doForce) {
                currentTag.parentNode.made = true;
                html += cTagRecursive(currentTag, iteration);
            }
        }
        else if (currentTag.nodeName == "sectionGroup") {
            if (currentTag.hasAttribute("chance") || currentTag.attributes["chance"].value < randomInteger(0, 99)) {
                html += cTagRecursive(currentTag, iteration);
            }
        }
        else if (currentTag.nodeName == "set" && currentTag.parentNode.nodeName != "effects") {
            if (currentTag.hasAttribute("delta")) set(currentTag.attributes["who"].value, currentTag.attributes["what"].value, currentTag.attributes["delta"].value, null);
            else set(currentTag.attributes["who"].value, currentTag.attributes["what"].value, null, currentTag.attributes["to"].value);
        }
        else if (currentTag.nodeName == "print") {
            html += print(currentTag.attributes["who"].value, currentTag.attributes["what"].value);
        }
        else if (currentTag.nodeName == "goto") {
            if (currentTag.hasAttribute("scene")) {

                if (currentTag.parentNode.nodeName == "effects") {
                    var v = "&arr;";
                    var c = currentTag.parentNode.parentNode, ic = 0;
                    while (c != null) {
                        c = c.previousElementSibling;
                        if (c != null && c.nodeName == "choice") ic++;
                    }
                    effCompare(currentTag.parentNode, ic);
                    try {
                        var t = currentTag.parentNode.parentNode.getElementsByTagName("title")[0];
                        v = implicitVreplace(t.textContent);
                    }
                    catch (e) {

                    }
                    html += "&nbsp;&nbsp;&nbsp;<button  type=\"button\" class=\"nes-btn is-primary\"  onclick=\"goto('scene','" + currentTag.attributes["scene"].value + "'," + ic + ");\">" + v + "</button>";
                    continue;
                }
                var child = window.cats.getElementsByTagName("scenes")[0].children;
                for (var i = 0; i < child.length; i++) {
                    if (child[i].getElementsByTagName("name")[0].textContent == currentTag.attributes["scene"].value) {
                        //console.log(child[i]);
                        html += cTagRecursive(child[i], iteration);
                        break;
                    }
                }
            }
            else if (currentTag.hasAttribute("question")) {
                if (currentTag.parentNode.nodeName == "effects") {
                    var v = "&arr;";
                    var c = currentTag.parentNode.parentNode, ic = 0;
                    while (c != null) {
                        //console.log(c);
                        c = c.previousElementSibling;
                        if (c != null && c.nodeName == "choice") ic++;
                    }
                    effCompare(currentTag.parentNode, ic);
                    try {
                        var t = currentTag.parentNode.parentNode.getElementsByTagName("title")[0];
                        v = implicitVreplace(t.textContent);
                    }
                    catch (e) {

                    }
                    html += "&nbsp;&nbsp;&nbsp;<button  type=\"button\" class=\"nes-btn is-primary\"  onclick=\"goto('question','" + currentTag.attributes["question"].value + "'," + ic + ");\">" + v + "</button>";
                    continue;
                }
                if (currentTag.attributes["question"].value == "next") {
                    Q();
                    continue;
                }
                var child = window.cats.getElementsByTagName("questions")[0].childNodes;
                for (var i = 0; i < child.length; i++) {
                    if (child[i].nodeName == "question") continue;
                    if (child[i].getElementsByTagName("name")[0].textContent == currentTag.attributes["question"].value) {
                        html = "";
                        html += cTagRecursive(child[i], iteration);
                        break;
                    }
                }
            }

            else if (currentTag.hasAttribute("event")) {
                if (currentTag.hasAttribute("scene")) {
                    if (currentTag.parentNode.nodeName == "effects") {
                        var v = "&arr;";
                        var c = currentTag.parentNode.parentNode, ic = 0;
                        while (c != null) {
                            c = c.previousElementSibling;
                            if (c != null && c.nodeName == "choice") ic++;
                        }
                        effCompare(currentTag.parentNode, ic);
                        try {
                            var t = currentTag.parentNode.parentNode.getElementsByTagName("title")[0];
                            v = implicitVreplace(t.textContent);
                        }
                        catch (e) {

                        }
                        html += "&nbsp;&nbsp;&nbsp;<button  type=\"button\" class=\"nes-btn is-primary\"  onclick=\"goto('event','" + currentTag.attributes["event"].value + "'," + ic + ");\">" + v + "</button>";
                        continue;
                    }
                    var child = window.cats.getElementsByTagName("events")[0].childNodes;
                    for (var i = 0; i < child.length; i++) {
                        if (child[i].getElementsByTagName("name") == currentTag.attributes["event"].value) {
                            html = "";
                            html += cTagRecursive(child[i], iteration);
                            break;
                        }
                    }

                }
            }
        }
        else {
            html += cTagRecursive(currentTag, iteration);
        }
    }

    return html;
}


function upGrData() {
    virus = gameVars["virus"];
    $("#vName").html(virus["title"]);
    //$("#vDesc").html(virus["description"]);
    var data = google.visualization.arrayToDataTable([
        ['Categoria', 'Persone'],
        ['Sani', virus["people"]["healthy"]],
        ['Infetti', virus["people"]["infected"]],
        ['Immuni', virus["people"]["immune"]],
        ['Morti', virus["people"]["dead"]]
    ]);

    var options = {
        title: 'CTS',
        backgroundColor: { fill: 'transparent' },
        color: "white",
        chartArea: {
            // leave room for y-axis labels
            width: '94%'
        },
        legend: {
            position: 'top'
        },
        width: '100%'
    };
    chart.draw(data, options);

}
function gameOver() {
    audio.src = "music/end.mp3";
    audio.play();

    $("#beginSect2").fadeIn();
    $("#mq2").html(`
    <pre>
        
    Game Over
        
        
        
        
    Araldia
    
    &copy; 2021
    Mattia Mascarello
    Diego Scanavino
    Giacomo Roggero
    
    Musica: RoleMusic
    </pre>
    
    `);

}
var i = 0, childrenEl = null, tHtml = "", chart = null, tick = 0, chart = null;
parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");
var cats = xmlDoc.children[0];
initParties();
var values = cats.getElementsByTagName("values")[0];
tHtml = `
<table>
`;
for (i = 0; i < values.childElementCount; i++) {
    childrenEl = values.children[i];
    //console.log(childrenEl);
    tHtml += `<tr id="` + childrenEl.getElementsByTagName("name")[0].textContent + `" onmouseover="ttvy(this)" onmouseout="ttvn(this)" data-desc="` + childrenEl.getElementsByTagName("description")[0].textContent + `"><td>` + childrenEl.getElementsByTagName("title")[0].textContent + `</td><td class="mtW">&nbsp;&nbsp;&nbsp;<progress  class="nes-progress is-success"  style=" width:400px;" min="` + childrenEl.getElementsByTagName("min")[0].textContent + `" max="` + childrenEl.getElementsByTagName("max")[0].textContent + `" value="` + childrenEl.getElementsByTagName("default")[0].textContent + `"  ></progress></td><td>` + childrenEl.getElementsByTagName("default")[0].textContent + `</td></tr>`;
}
//console.log(tHtml);
tHtml += "</table>";
$("#levels").hide();
$("#musicBox").fadeIn();
document.getElementById("levels").innerHTML = tHtml;
$("#begin").click(function () {
    set("levels", "health", null, 50);
    set("levels", "economy", null, 50);
    set("levels", "consensus", null, 50);
    set("levels", "security", null, 50);
    set("difficulty", $("#dfficultySelect").val());
    if ($("#username").val().length == 0) return false;
    setTimeout(function () { deAudio(6); }, 100);
    $("#mainMenu").fadeOut();
    $("#beginSect").fadeIn();
    $("#mq").attr("scrolldelay", cats.getElementsByTagName("misc")[0].getElementsByTagName("welcomeMessage")[0].attributes["scrollDelay"].value);
    $("#mq").attr("direction", cats.getElementsByTagName("misc")[0].getElementsByTagName("welcomeMessage")[0].attributes["direction"].value);
    $("#mq").html(cats.getElementsByTagName("misc")[0].getElementsByTagName("welcomeMessage")[0].textContent);
    setTimeout(function () {
        $("#levels").fadeIn();
        $("#beginSect").fadeOut();

        var data = google.visualization.arrayToDataTable([
            ['Categoria', 'Persone'],
            ['Sani', 6000000],
            ['Infetti', 0],
            ['Immuni', 0],
            ['Morti', 0]
        ]);

        var options = {
            title: 'CTS',
            backgroundColor: { fill: 'transparent' },
            color: "white",
            chartArea: {
                // leave room for y-axis labels
                width: '94%'
            },
            legend: {
                position: 'top'
            },
            width: '100%'
        };

        chart = new google.visualization.PieChart(document.getElementById('cts'));

        chart.draw(data, options);
        initRandVirus(function () {

            $("#countV").fadeIn();
            audio.src = "music/Rolemusic - The White Frame.mp3";
            audio.volume = 0;
            Q();
            setTimeout(function () {
                audio.volume = 1
                audio.play()
            }, 3000);
        });
    }, cats.getElementsByTagName("misc")[0].getElementsByTagName("welcomeMessage")[0].attributes["duration"].value * 1000);
})

var randMap = {};
function randEl(category) {
    if (!randMap[category]) randMap[category] = [0];
    if (randMap[category].length == cats.getElementsByTagName(category)[0].childElementCount) randMap[category] = [0];
    if (tick % 5 == 0) return cats.getElementsByTagName(category)[0].children[0];
    var imx = imx = randomInteger(0, cats.getElementsByTagName(category)[0].childElementCount - 1);
    while (randMap[category].indexOf(imx) > -1) {
        imx = randomInteger(0, cats.getElementsByTagName(category)[0].childElementCount - 1);
    }
    randMap[category].push(imx);
    return cats.getElementsByTagName(category)[0].children[imx];
}
function getEl(category, name) {
    if (category == "questions" && name == "next") return Q();
    var ets = cats.getElementsByTagName(category)[0].getElementsByTagName("name");
    for (var i = 0; i < ets.length; i++) {
        if (ets[i].textContent == name) {
            return setField(ets[i].parentNode);
        }
    }
}
function setField(h, i = 0) {
    var res = cTagRecursive(h);
    deadlyError = true;
    if (res === false) return Q();
    var tml = "<br /><br /><br /><br /><br /><br /><br />" + res;
    $("#gameField").hide();
    $("#gameField").html(tml);
    $("#gameField").show();
    gameVars.player.actionN++;
}
function Q() {
    lastVircb = null;
    var h = randEl("questions");
    if (tick % 5 == 0 && tick != 0) {
        $("#gameField").hide();
        gameVars["virus"]["infoboxLastI"]++;
        $("#virusBeginOhNo").show();
        var infoId = gameVars["virus"]["infoboxLastI"];
        var el = cats.getElementsByTagName("viruses")[virusIndex];
        try {
            var text = el.getElementsByTagName("infoboxes")[0].children[infoId].textContent;
            if (text == undefined) throw "un";
        }
        catch (e) {
            $("gameField").show();
            $("virusBeginOhNo").hide();
        }
        $("#virusBeginOhNo").html("<br/><br/><br/><br/><br/><br/><br/><h1>Bollettino</h1><br /><p class=\"wbb\">" + text + "</p><button type=\"button\" class=\"okVir nes-btn is-primary\">OK</button>");
    }

    setField(h);

    /*if(tick%5==0 && tick!=0) */ calcvir();
    tick++;
}
window.onerror = function (message, source, lineno, colno, error) {
    $("#errorData").html(`
    <div class="nes-table-responsive">
<table class="nes-table is-bordered is-centered" style="height:300px;width:700px;">
        <tr>
            <td>Message</td>
            <td>`+ message + `</td>
            </tr>
        <tr>
            <td>Source</td>
            <td>`+ source + `</td>
            </tr>
        <tr>
            <td>Line and column</td>
            <td>`+ lineno + `:` + colno + `</td>
            </tr>
            

        <tr>
            <td>Error</td>
            <td>`+ error + `</td>
            </tr>

        </table>
        </div>
    `);
    $("#error").show();
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
dragElement(document.getElementById("error"));
function goto(cat, name, ic = 0) {
    try {
        lastEff.forEach(function (a) {
            //([a,ic]);
            if (a["iC"] != ic) return false;
            set(a["who"], a["what"], a["delta"], a["to"]);
        });
    }
    catch (e) {
        //console.log(e);
    }
    lastEff = [];
    if (cat == "question" && name == "next") {
        Q();
    }
    else {
        getEl(cat + "s", name);
    }
}




var tooltipvisible = false, text = "Mayor Tom, There is something wrong!";
function ttvy(a) {
    tooltipvisible = true;
    text = a.attributes["data-desc"].value;
}
function ttvn(a) {
    tooltipvisible = false;
}
//Make the DIV element draggagle:
tooltipel(document.getElementById("tooTpk"));

function tooltipel(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.onmousemove = elementDrag;


    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        elmnt.style.display = tooltipvisible ? "block" : "none";
        document.getElementById("tooltT").innerHTML = text;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (pos4) + "px";
        elmnt.style.left = (pos3) + "px";
    }


}
function initSplash(i = 0, callback) {
    if (i < 80) {
        setTimeout(function () {
            $("#splashImg").css("width", i + "%");
            initSplash(i + 1, callback);
        }, 100);
    }
    else {
        callback();
    }
}

function updateLevelGraphically(id, val) {
    var prog = $("#" + id).children(".mtW").children("progress");
    prog.attr("value", val);
    $("#" + id).children("td").last().html(val);
    prog.removeClass("is-success");
    prog.removeClass("is-warning");
    prog.removeClass("is-error");
    if (val > 50) {
        prog.addClass("is-success");
    }
    else if (val > 25) {
        prog.addClass("is-warning");
    }
    else {
        prog.addClass("is-error");
    }
}
function initParties() {
    gameVars["parties"] = [];
    var pts = xmlDoc.getElementsByTagName("parties")[0].children;
    for (var i = 0; i < pts.length; i++) {
        gameVars["parties"].push({
            "name": pts[i].getElementsByTagName("title")[0].textContent,
            "secretary": pts[i].getElementsByTagName("secretary")[0].textContent,
            "description": pts[i].getElementsByTagName("description")[0].textContent,
            "motto": pts[i].getElementsByTagName("motto")[0].textContent
        });
    }
}

function effCompare(effectsTag, iC) {
    console.log({ "Tag": effectsTag, "iC": iC });
    var elL = effectsTag.getElementsByTagName("set");
    for (var i = 0; i < elL.length; i++) {
        var delta = null, to = null;
        if (elL[i].hasAttribute("delta")) delta = elL[i].attributes["delta"].value;
        if (elL[i].hasAttribute("to")) delta = elL[i].attributes["to"].value;
        lastEff.push({ "iC": iC, "who": elL[i].attributes["who"].value, "what": elL[i].attributes["what"].value, "delta": delta, "to": to });
    }

}
function calcvir() {
    /*
    Algoritmo
    

    */
    var peopleTot = 6000000, dd = 0, inffactor = (0.20 + 0.01 * randomInteger(0, 10));
    var inf = gameVars["virus"]["people"]["infected"];
    gameVars["virus"]["people"]["infected"] = inf * (gameVars["virus"]["Rt"] + 1);
    gameVars["virus"]["people"]["infected"] -= inf;
    gameVars["virus"]["people"]["immune"] += inf;
    dd = Math.floor(inf * gameVars["virus"]["lethality"] / 100);
    gameVars["virus"]["people"]["dead"] += dd;
    gameVars["virus"]["people"]["immune"] -= dd;
    // simulate time to healing, infection by immunes
    gameVars["virus"]["people"]["infected"] += gameVars["virus"]["people"]["immune"] * inffactor;
    gameVars["virus"]["people"]["healthy"] = peopleTot - (gameVars["virus"]["people"]["infected"] + gameVars["virus"]["people"]["dead"] + gameVars["virus"]["people"]["immune"]);
    if (gameVars["virus"]["people"]["healthy"] < 0) gameVars["virus"]["people"]["healthy"] = 0;
    if (gameVars["virus"]["people"]["infected"] < 0) gameVars["virus"]["people"]["infected"] = 0;
    if (gameVars["virus"]["people"]["dead"] < 0) gameVars["virus"]["people"]["dead"] = 0;
    if (gameVars["virus"]["people"]["immune"] < 0) gameVars["virus"]["people"]["immune"] = 0;


    upGrData();
}
var lastVircb = null, virusIndex = 0;
function initRandVirus(cb) {
    lastVircb = cb;
    setTimeout(function () {
        audio.src = "music/improvisation.mp3";
        audio.volume = 1;
        audio.play()
        10
    }, 1000);
    var li = window.cats.getElementsByTagName("viruses")[0].children;
    var Iindex = randomInteger(0, li.length - 1);
    virusIndex = Iindex;
    var el = li[Iindex];
    var title = el.getElementsByTagName("title")[0].textContent;
    var text = el.getElementsByTagName("infoboxes")[0].children[0].textContent;
    var nT = randomInteger(100, 500);
    gameVars["virus"] = {};
    gameVars["virus"]["people"] = {};
    gameVars["virus"]["people"]["dead"] = 0;
    gameVars["virus"]["people"]["immune"] = 0;
    gameVars["virus"]["people"]["infected"] = randomInteger(30, 200);
    gameVars["virus"]["people"]["healthy"] = 6000000;

    gameVars["virus"]["title"] = title;
    gameVars["virus"]["infoboxLastI"] = 0;
    // deprecated	gameVars["virus"]["stepsBeforeShowDashboard"] = randomInteger(3, 10);
    gameVars["virus"]["dashboardShown"] = false;
    gameVars["virus"]["Iindex"] = Iindex;
    gameVars["virus"]["lethality"] = parseFloat(el.getElementsByTagName("levels")[0].getElementsByTagName("lethality")[0].textContent);
    gameVars["virus"]["Rt"] = parseFloat(el.getElementsByTagName("levels")[0].getElementsByTagName("Rt")[0].textContent)
    $("#gameField").hide();
    $("#virusBeginOhNo").html("<br/><br/><br/><br/><br/><br/><br/><h1>" + title + "</h1><br /><p class=\"wbb\">" + text + "</p><button type=\"button\" class=\"okVir nes-btn is-primary\">OK</button>");
}
$(document).delegate(".okVir", "click", function () {
    $(this).closest(".closableVir").fadeOut();
    if (lastVircb) lastVircb();
});