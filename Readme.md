# FlappyLight

> Jogo Arcade simples feito com Javascript!.




<a href="#"><img width="728" src="https://raw.githubusercontent.com/kenjishiromajp/flappylight/master/imgs/imagem_fundo.png" alt="Flappy Light" /></a>

## Instalação

 Instale o node-red utilizando o comando

```
npm i -g node-red
```

Copie importe os nós da aplicação
```
[{"id":"dc020f8e.4ef52","type":"arduino in","z":"bdccdfd2.29b1b","name":"Luminosity","pin":"1","state":"ANALOG","arduino":"fb63ac70.6d3ef","x":203.50000762939453,"y":464.2000427246094,"wires":[["c693b61d.ec9ea8","c11c2c0f.0fa3e"]]},{"id":"c693b61d.ec9ea8","type":"ui_gauge","z":"bdccdfd2.29b1b","name":"Luminosidade","group":"50cca53e.e6eb6c","order":0,"width":"6","height":"5","gtype":"gage","title":"Luminosidade","label":"Lux","format":"{{value}}","min":0,"max":"1000","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":581.5000152587891,"y":395.00001430511475,"wires":[]},{"id":"72600b67.0bf3a4","type":"socketio-in","z":"bdccdfd2.29b1b","name":"luminosityIO","server":"c3108394.114ce","rules":[{"v":"luminosity"}],"x":236.50001907348633,"y":285.787504196167,"wires":[["981de43a.3f6688"]]},{"id":"981de43a.3f6688","type":"debug","z":"bdccdfd2.29b1b","name":"debug","active":true,"console":"false","complete":"true","x":514.1000099182129,"y":281.600004196167,"wires":[]},{"id":"6d872fe0.6a9cb","type":"socketio-out","z":"bdccdfd2.29b1b","name":"luminosityIO","server":"c3108394.114ce","x":767.5000152587891,"y":523.8000183105469,"wires":[]},{"id":"c11c2c0f.0fa3e","type":"function","z":"bdccdfd2.29b1b","name":"setSocketIOEvent","func":"msg.socketIOEvent = \"luminosity\";\nreturn msg;","outputs":1,"noerr":0,"x":534.1000862121582,"y":480.60012435913086,"wires":[["6d872fe0.6a9cb"]]},{"id":"fb63ac70.6d3ef","type":"arduino-board","z":"","device":"COM3"},{"id":"50cca53e.e6eb6c","type":"ui_group","z":"","name":"CASA","tab":"1d82026d.0ef09e","disp":true,"width":"6"},{"id":"c3108394.114ce","type":"socketio-config","z":"","port":"1550","sendClient":"true","path":"/socket.io","bindToNode":true},{"id":"1d82026d.0ef09e","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

Vá até a pasta `./client_css/` com o terminal e execute o comando
```
npm install
```
ou
```
yarn install
```

# Como jogar agora?

- Primeiro suba o serviço no node-red com o flow importado
```
node-red
```
- Depois rode o comando:

```
npm start
```
