const { execSync } = require('child_process');
const parser = require('xml2json');
const fs = require('fs');

const system_type = 'AP';
const system_id = 'FA-168';
const account_type = '04';
const cost_center = '3601';

const custodian = '73854';

const account = 'tzungpinglin';
const cus_emp_no = '73854';
const apply_no = 'APP-20200324-00066-0008';
const comment = '同意';
const doc_no = 'APP-20200324-00066';
const finish_date = '2020-04-09 15:55:00.0';
const status = 'F';

const start = async function start() {
  const alCommand = `./SH/getAccountList.sh -a ${account_type} -c ${cost_center} -d ${custodian} -i ${system_id} -t ${system_type}`;
  const alResult = await execScrWithAPMS(alCommand, 'getAccountListResponse');
  console.log(alResult);

  const dlCommand = `./SH/getToDoList.sh -d ${custodian}`;
  const dlResult = await execScrWithAPMS(dlCommand, 'finishApplicationResponse');
  console.log(dlResult);

  const faCommand = `./SH/finishApplication.sh -a ${account} -b ${cus_emp_no} -n ${apply_no} -c ${comment} -d ${doc_no} -f ${finish_date} -s ${status}`;
  const faResult = await execScrWithAPMS(faCommand, 'getToDoListResponse');
  console.log(faResult);
}


const execScrWithAPMS = async function execScrWithAPMS(command, keyword) {
  try {
    const resultFromAPMS = execSync(command).toString();
    // const resultFromAPMS = fs.readFileSync(command, 'utf-8');
    const jsonFromAPMS = parser.toJson(resultFromAPMS);
    const jsFromAPMS = JSON.parse(jsonFromAPMS);
    const jsonInfo = parser.toJson(jsFromAPMS['soapenv:Envelope']['soapenv:Body'][`ns:${keyword}`]['ns:return']);
    const jsInfo = JSON.parse(jsonInfo);
    // console.log(jsInfo.root);
    if (jsInfo.root.return_code === '0') {
      return { status_code: 20000, data: jsInfo['root']['row'] };
    } else {
      return { status_code: 40102, code: jsInfo.root.return_code, msg: jsInfo.root.return_message };
    }
  } catch(err) {
    console.log(err);
    return { status_code: 50301, code: jsInfo.root.return_code, msg: jsInfo.root.return_message };
  }
}
start();
