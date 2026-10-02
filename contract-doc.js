/* ─────────────────────────────────────────────
   계약서 · 영수증 문서 생성 (공통)
   계약서 화면(index.html)과 관리자 화면(admin.html)이 같은 코드를 사용합니다.
   val(name) 은 항목 이름을 받아 값을 돌려주는 함수입니다.
   ───────────────────────────────────────────── */
const SEAL = "data:image/png;base64,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";

const COMPANY = {
  name: "일산상조(예장라이프)",
  bizNo: "413-90-09270",
  ceo: "이 석 수",
  type: "서비스",
  item: "장의관련서비스",
  addr: "경기 고양시 일산동구 식사동 910",
  bank: "농협 241020-56-043980 이석수"
};

const GOODS = [
  { title:"고인 용품", items:[
    "관","수의",
    { n:"입관용품", note:"명정·습신·관보·염베·결관바·운아/폐백·다라니경·보공·탈지면·알코올·한지" }
  ]},
  { title:"기타 용품", items:["향","초","혼백","영정리본"] },
  { title:"상복",      items:["남상복셋트","여상복"] },
  { title:"추가용품",  amount:true, items:["전분함","유골함","리무진","도우미","관","상복"] }
];


/* 품목 목록 — 수량/금액 입력 칸의 이름(key)도 여기서 정해집니다 */
const ITEMS = [];
(function buildItems(){
  const used = new Set();
  GOODS.forEach(col => col.items.forEach(it => {
    const name = typeof it === "string" ? it : it.n;
    const note = typeof it === "string" ? "" : (it.note || "");
    let key = "qty_" + name.replace(/[^0-9A-Za-z가-힣]/g, "_");
    while (used.has(key)) key += "_2";
    used.add(key);
    ITEMS.push({ group: col.title, name, note, key, amount: !!col.amount });
  }));
})();

const num = v => Number(String(v ?? "").replace(/[^\d-]/g, "")) || 0;
const fmt = n => n.toLocaleString("ko-KR");

const hx = v => String(v ?? "").replace(/[&<>"]/g, ch => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[ch]));

const chk = (val, name, opts) => opts.map(o => {
  const on = val(name) === o;
  return `<span class="chk${on ? " on" : ""}">${on ? "■" : "□"} ${o}</span>`;
}).join("");
function dt(d, t){
  let out = "";
  if (d){ const [y, m, dd] = d.split("-"); out = `${y}. ${+m}. ${+dd}.`; }
  if (t) out += (out ? " " : "") + t;
  return out;
}
const unit = (v, u) => v ? `${hx(v)}${u}` : "";

function goodsTable(val, groups, withAmount){
  const cols = withAmount
    ? `<col style="width:17%"><col><col style="width:14%"><col style="width:25%">`
    : `<col style="width:22%"><col><col style="width:17%">`;
  let rows = "";
  groups.forEach(g => {
    const list = ITEMS.filter(it => it.group === g);
    list.forEach((it, n) => {
      const q = val(it.key), a = it.amount ? val("amt_" + it.key.slice(4)) : "";
      const on = Number(q) > 0 || num(a) > 0;
      rows += `<tr class="${on ? "on" : ""}">`
        + (n === 0 ? `<td class="grp" rowspan="${list.length}">${hx(g)}</td>` : "")
        + `<td>${hx(it.name)}${it.note ? `<span class="note">${hx(it.note)}</span>` : ""}</td>`
        + `<td class="c">${hx(q)}</td>`
        + (withAmount ? `<td class="r">${num(a) ? fmt(num(a)) + "원" : ""}</td>` : "")
        + `</tr>`;
    });
  });
  return `<table><colgroup>${cols}</colgroup>
    <thead><tr><th>구분</th><th>품목</th><th>수량</th>${withAmount ? "<th>금액</th>" : ""}</tr></thead>
    <tbody>${rows}</tbody></table>`;
}

function fillContract(root, val){
  const fam = [["자","famSon"],["자부","famSonW"],["녀","famDau"],["사위","famDauH"]]
    .map(([k, n]) => `${k} ( ${hx(val(n)) || "&nbsp;&nbsp;"} )`).join(" &nbsp;/&nbsp; ");
  const helper = [unit(val("helperCnt"), "명"), unit(val("helperHour"), "시간")].filter(Boolean).join(" · ");
  const cause = chk(val, "cause", ["병사","기타"]) + (val("causeEtc") ? `( ${hx(val("causeEtc"))} )` : "");
  const pay = (v, w) => `<u>${hx(v) || "&nbsp;".repeat(w)}</u>`;
  const sigImg = key => val(key) ? `<img src="${val(key)}" alt="">` : `<em>(서명)</em>`;

  root.innerHTML = `
    <div class="d-head">
      <div class="d-title">의전계약서</div>
      <div class="d-co">일산상조</div>
    </div>

    <table><colgroup><col style="width:12%"><col><col style="width:12%"><col><col style="width:9%"><col style="width:17%"></colgroup>
      <tr><th>접수일자</th><td>${dt(val("receiptDate"))}</td>
          <th>의전 장소</th><td>${hx(val("place"))}</td>
          <th>종교</th><td>${hx(val("religion"))}</td></tr>
    </table>

    <h3>1. 기본 사항</h3>
    <table><colgroup><col style="width:12%"><col><col style="width:10%"><col style="width:20%"><col style="width:10%"><col style="width:17%"></colgroup>
      <tr><th>고인 성명</th><td><b>${hx(val("dName"))}</b></td>
          <th>성별</th><td>${chk(val, "dSex", ["남","여"])}</td>
          <th>본관</th><td>${hx(val("origin"))}</td></tr>
      <tr><th>연령</th><td>${unit(val("age"), " 세")}</td>
          <th>신장</th><td>${unit(val("height"), " cm")}</td>
          <th>장법</th><td>${chk(val, "method", ["매장","화장"])}</td></tr>
      <tr><th>고인 주소</th><td colspan="5">${hx(val("dAddr"))}</td></tr>
      <tr><th>사망 원인</th><td colspan="3">${cause}</td>
          <th>장지</th><td>${hx(val("burialSite"))}</td></tr>
      <tr><th>상주 성명</th><td><b>${hx(val("chief"))}</b></td>
          <th>관계</th><td>${hx(val("relation"))}</td>
          <th>휴대폰</th><td>${hx(val("telMobile"))}</td></tr>
      <tr><th>가족 사항</th><td colspan="3">${fam}</td>
          <th>자택</th><td>${hx(val("telHome"))}</td></tr>
    </table>

    <h3>2. 상품 안내</h3>
    <div class="d-goods">
      ${goodsTable(val, ["고인 용품","기타 용품"], false)}
      ${goodsTable(val, ["상복","추가용품"], true)}
    </div>
    <div class="d-total">
      <span>상품 금액 <b class="s">${fmt(num(val("productAmt")))}원</b> &nbsp;+&nbsp; 추가 금액 <b class="s">${fmt(num(val("extraAmt")))}원</b></span>
      <span>총 잔여금액 &nbsp;<b>${fmt(num(val("balance")))} 원</b></span>
    </div>

    <h3>3. 서비스 품목 · 장례 일정</h3>
    <table><colgroup><col style="width:12%"><col><col style="width:12%"><col><col style="width:12%"><col></colgroup>
      <tr><th>염습 / 입관</th><td colspan="3">${hx(val("director"))}</td>
          <th>입관 일시</th><td>${dt(val("coffinDate"), val("coffinTime"))}</td></tr>
      <tr><th>장례 도우미</th><td>${helper}</td>
          <th>1일차</th><td>${hx(val("day1"))}</td>
          <th>2일차</th><td>${hx(val("day2"))}</td></tr>
      <tr><th>의전 진행</th><td>${hx(val("conductor"))}</td>
          <th>장의 차량</th><td colspan="3">${chk(val, "vehicle", ["한국형리무진","버스","캐딜락"])}</td></tr>
      <tr><th>발인 일시</th><td colspan="2">${dt(val("funeralDate"), val("funeralTime"))}</td>
          <th>화장·하관</th><td colspan="2">${dt(val("cremDate"), val("cremTime"))}</td></tr>
    </table>

    <h3>4. 고객 안내사항 · 계약 확인</h3>
    <div class="d-info">
      <div class="box"><b>안내사항</b><ul>
        <li>장례식장 시설사용료, 식대, 제물비용, 제단, 장지비용 등은 별도 금액입니다.</li>
        <li>당사 상품 이외의 서비스 이용 시 규정에 따른 별도의 추가 금액이 청구됩니다.</li>
        <li>유가족이 외부에서 반입하신 음식은 일산상조와 아무런 관련이 없습니다.</li>
      </ul></div>
      <div class="box confirm"><b>계약 확인</b>
        본인은 상기 상조상품 수량 및 추가 금액을 항목별로 설명받아 확인하였으며,
        서명과 동시에 의전 진행이 개시됨을 안내받았습니다.
        계약 해지 시 해약금이 발생할 수 있다는 점을 고지받았으며, 계약서 1부를 수령하였습니다.
      </div>
    </div>

    <div class="pledge">상기 총 잔여금액을 ${pay(val("payYear"), 6)} 년 ${pay(val("payMonth"), 4)} 월 ${pay(val("payDay"), 4)} 일 발인 전 일시에 지불키로 합니다.</div>

    <div class="d-signs">
      <table><colgroup><col style="width:28%"><col></colgroup>
        <tr><th rowspan="2">서명인<br>(상주 / 회원)</th><td>성명 &nbsp;<b>${hx(val("chief"))}</b></td></tr>
        <tr><td class="sig">${sigImg("_sigChief")}</td></tr>
      </table>
      <table><colgroup><col style="width:28%"><col></colgroup>
        <tr><th rowspan="2">의전 책임자</th><td>성명 &nbsp;<b>${hx(val("conductor"))}</b></td></tr>
        <tr><td class="sig">${sigImg("_sigStaff")}</td></tr>
      </table>
    </div>

    <div class="d-foot">
      <span>서명일시 ${hx(val("signedAt")) || "—"} &nbsp;·&nbsp; 설명자 ${hx(val("conductor")) || "—"}</span>
      <span>일산상조</span>
    </div>`;
}

function fillReceiptDoc(root, val){
  const today = new Date();
  const stamp = (val("signedAt") || "").replace(/\s*\d{1,2}:\d{2}\s*$/, "").trim();
  const paidDate = stamp || `${today.getFullYear()}. ${today.getMonth()+1}. ${today.getDate()}.`;
  const [py, pm, pd] = paidDate.replace(/\./g, " ").trim().split(/\s+/);
  const won = v => (num(v) ? fmt(num(v)) + "원" : "");

  const product = num(val("productAmt"));
  const adds = ITEMS.filter(it => it.amount && num(val("amt_" + it.key.slice(4))) > 0)
    .map(it => {
      const q = Number(val(it.key)) || 1, a = num(val("amt_" + it.key.slice(4)));
      return { name: it.name, q, unit: Math.round(a / q), amt: a };
    });
  const extra = adds.reduce((t, x) => t + x.amt, 0);
  const total = product + extra;

  const rows = [
    `<tr><td class="l">${COMPANY.name.split("(")[0]} 상품</td><td>1</td><td class="r">${fmt(product)}</td>
         <td class="r">${fmt(product)}</td><td colspan="2">모든 상품 일체</td></tr>`,
    ...adds.map(x => `<tr><td class="l">${hx(x.name)}</td><td>${x.q}</td><td class="r">${fmt(x.unit)}</td>
         <td class="r">${fmt(x.amt)}</td><td colspan="2"></td></tr>`),
    ...Array.from({ length: Math.max(0, 8 - adds.length) },
      () => `<tr><td class="l">&nbsp;</td><td></td><td></td><td></td><td colspan="2"></td></tr>`)
  ].join("");

  root.innerHTML = `
    <div class="r-top">
      <div class="r-t">장 례 의 전 영수증</div>
      <div class="r-s">[ 공 급 받 는 자 용 ]</div>
      <div class="r-to"><span>고</span> <b>${hx(val("dName")) || "&nbsp;&nbsp;&nbsp;"}</b> <span class="gw">貴下</span></div>
    </div>

    <table class="rt">
      <colgroup><col style="width:17%"><col style="width:15%"><col style="width:16%"><col style="width:16%"><col style="width:14%"><col></colgroup>
      <tr><th>업체명</th><td colspan="5" class="co">${COMPANY.name}</td></tr>
      <tr><th>사업자등록번호</th><td colspan="3">${COMPANY.bizNo}</td><th>대표자</th><td>${COMPANY.ceo}</td></tr>
      <tr><th>업 태</th><td colspan="3">${COMPANY.type}</td><th>종 목</th><td>${COMPANY.item}</td></tr>
      <tr><th>사업장소재지</th><td colspan="5">${COMPANY.addr}</td></tr>
      <tr><th>의전일자</th><td colspan="1" class="nw">${dt(val("receiptDate"))} ~ ${(val("funeralDate") || "").split("-").slice(1).map(n => +n).join(". ")}${val("funeralDate") ? "." : ""}</td>
          <th>영수일자</th><td>${paidDate}</td><th>영수자</th><td>${hx(val("conductor")) || COMPANY.ceo}</td></tr>
      <tr><th>상품금액</th><th>월 불입액</th><th>불입 회차</th><th>불입 금액</th><th colspan="2">잔 액</th></tr>
      <tr><td class="r">${won(product)}</td><td></td><td></td><td></td><td colspan="2" class="r b">${won(product)}</td></tr>

      <tr><th colspan="6" class="mid">고객요청 추가 항목</th></tr>
      <tr><th>품 목</th><th>수량</th><th>단가</th><th>금액</th><th colspan="2">비 고</th></tr>
      ${rows}
      <tr><th colspan="2">소 계</th><td colspan="2" class="r b">${won(total)}</td><td colspan="2"></td></tr>

      <tr><th colspan="6" class="bank">결 산 금 액 &nbsp;( <span>${COMPANY.bank.replace(/\s(\S+)$/, '</span> $1')} )</th></tr>
      <tr><th colspan="2">잔 액</th><th colspan="2">추 가 항 목</th><th colspan="2">총 금 액</th></tr>
      <tr><td colspan="2" class="r">${won(product)}</td><td colspan="2" class="r">${won(extra)}</td>
          <td colspan="2" class="r tot">${won(total)}</td></tr>
    </table>

    <div class="r-end">
      <div class="msg">상기 금액을 영수합니다.</div>
      <div class="date">20 ${(py || "").slice(-2)}년 &nbsp;&nbsp; ${pm || ""}월 &nbsp;&nbsp; ${pd || ""}일</div>
      <div class="co2">${COMPANY.name}<img class="seal" src="${SEAL}" alt=""></div>
    </div>`;
}

