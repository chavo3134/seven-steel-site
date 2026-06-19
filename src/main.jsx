import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const GORSELLER = {
  logo: "/assets/images/seven-steel-logo.png",
  kahraman: "/assets/images/hero-steel-roof.png",
  model: "/assets/images/engineering-model-02.png",
  hakkimizda: "/assets/images/steel-structure-02.png",
  atölye: "/assets/images/special-equipment-01.png",
  hizmetler: [
    "/assets/images/engineering-model-01.png",
    "/assets/images/steel-structure-01.png",
    "/assets/images/panel-cladding-01.png",
    "/assets/images/steel-roof-05.png",
    "/assets/images/steel-roof-07.png",
    "/assets/images/special-equipment-01.png",
    "/assets/images/steel-roof-03.png",
    "/assets/images/panel-cladding-02.png",
    "/assets/images/staircase-01.png",
    "/assets/images/prefab-02.png",
    "/assets/images/container-01.png"
  ],
  projeler: [
    "/assets/images/steel-roof-04.png",
    "/assets/images/panel-cladding-01.png",
    "/assets/images/staircase-01.png",
    "/assets/images/prefab-02.png",
    "/assets/images/container-01.png"
  ],
  galeri: [
    "/assets/images/steel-roof-02.png",
    "/assets/images/steel-roof-06.png",
    "/assets/images/steel-structure-03.png",
    "/assets/images/engineering-model-03.png",
    "/assets/images/prefab-01.png",
    "/assets/images/steel-roof-07.png"
  ]
};

const telefon = "+90 532 674 10 13";
const whatsappUrl = `https://wa.me/905326741013?text=${encodeURIComponent(
  "Merhaba, Seven Steel web sitesi üzerinden teklif almak istiyorum."
)}`;

const menu = [
  ["Ana Sayfa", "#ana-sayfa"],
  ["Hakkımızda", "#hakkimizda"],
  ["Hizmetler", "#hizmetler"],
  ["Projeler", "#projeler"],
  ["Neden Seven Steel?", "#neden-seven-steel"],
  ["İletişim", "#iletisim"]
];

const hizmetler = [
  ["Proje Yönetimi", "Keşif, ölçülendirme, imalat planı, saha organizasyonu ve teslim adımlarını tek merkezden yöneterek çelik yapı projelerinde netlik sağlıyoruz."],
  ["Çelik Yapı İmalatı ve Montaj", "Fabrika, depo, ticari alan ve endüstriyel tesisler için güçlü çelik konstrüksiyon imalatı ve kontrollü saha montajı yapıyoruz."],
  ["Çatı ve Cephe Kaplama Sistemleri", "Çatı kaplama, cephe kaplama ve sandviç panel kaplama uygulamalarında uzun ömürlü, yalıtımlı ve temiz bitişli çözümler sunuyoruz."],
  ["Yapı Güçlendirme", "Mevcut yapıların taşıyıcı ihtiyaçlarına uygun çelik takviye, güçlendirme ve bağlantı detaylarını sahaya uygun şekilde çözüyoruz."],
  ["Özel Ekipman İşleri", "Tesis ihtiyaçlarına özel platform, tank, taşıyıcı şase, üretim ekipmanı ve ağır hizmet çelik imalatları geliştiriyoruz."],
  ["Ataçman Kaynakları", "Bağlantı parçaları, ankraj detayları ve hassas kaynak uygulamalarında güvenli, temiz ve standartlara uygun üretim yaklaşımı benimsiyoruz."],
  ["Çelik Çatı", "Geniş açıklıklı yapılarda hafif, güçlü ve hızlı monte edilen çelik çatı sistemleri kuruyoruz."],
  ["Panel Kaplama", "Panel kaplama ve sandviç panel uygulamalarıyla endüstriyel yapılarda enerji verimliliği ve modern dış görünüm oluşturuyoruz."],
  ["Merdiven İmalatı", "Çelik merdiven, platform merdiveni ve saha erişim çözümlerini proje ölçülerine ve kullanım ihtiyacına göre üretiyoruz."],
  ["Prefabrik Ev", "Prefabrik ev projelerinde hızlı kurulum, sağlam taşıyıcı sistem ve modern mimari görünümü bir araya getiriyoruz."],
  ["Konteyner", "Şantiye, ofis, yaşam alanı ve özel kullanım senaryoları için işlevsel konteyner çözümleri hazırlıyoruz."]
];

const projeler = [
  ["Çelik Çatı Projeleri", "Geniş açıklıklı sanayi yapıları, depo alanları ve ticari projeler için çelik çatı imalatı ve montajı.", "çelik çatı"],
  ["Panel Kaplama Projeleri", "Çatı ve cephede sandviç panel, panel kaplama ve yalıtımlı dış kabuk uygulamaları.", "panel kaplama"],
  ["Merdiven Projeleri", "Endüstriyel tesisler, depo alanları ve ticari yapılar için çelik merdiven imalatı.", "merdiven imalatı"],
  ["Prefabrik Ev Projeleri", "Hafif çelik sistemli, hızlı kurulabilen ve modern görünüm sunan prefabrik ev çözümleri.", "prefabrik ev"],
  ["Konteyner Projeleri", "Ofis, şantiye ve yaşam alanı kullanımına uygun dayanıklı konteyner çözümleri.", "konteyner"]
];

const nedenler = [
  ["Mühendislik Odaklı Planlama", "Her projede açıklık, taşıyıcı sistem, kaplama tipi ve montaj sırası doğru kurgulanır."],
  ["Sahada Güçlü Uygulama", "İmalat kalitesi, kaynak detayları, bağlantı elemanları ve montaj güvenliği kontrollü ilerler."],
  ["Türkiye Geneli Hizmet", "Adana çelik yapı ihtiyaçlarından Türkiye geneli endüstriyel çelik yapı projelerine kadar ölçeklenebilir çözüm sunarız."],
  ["Net İletişim ve Şeffaf Süreç", "Keşiften teslimata kadar proje adımları anlaşılır, takip edilebilir ve kurumsal disiplinle yönetilir."]
];

function useYuklenme() {
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    const sure = window.setTimeout(() => setYukleniyor(false), 1550);
    return () => window.clearTimeout(sure);
  }, []);

  return yukleniyor;
}

function useGorunmeEfekti() {
  useEffect(() => {
    const ogeler = document.querySelectorAll("[data-gorun]");
    const izleyici = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("gorundu");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -70px 0px" }
    );
    ogeler.forEach(oge => izleyici.observe(oge));
    return () => izleyici.disconnect();
  }, []);
}

function useKahramanParalaks(ref) {
  useEffect(() => {
    const bolum = ref.current;
    if (!bolum) return;

    const hareket = event => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      bolum.style.setProperty("--mx", x.toFixed(3));
      bolum.style.setProperty("--my", y.toFixed(3));
    };

    window.addEventListener("pointermove", hareket);
    return () => window.removeEventListener("pointermove", hareket);
  }, [ref]);
}

function Sayac({ hedef, ek = "" }) {
  const [deger, setDeger] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const eleman = ref.current;
    if (!eleman) return;

    const izleyici = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      const baslangic = performance.now();
      const sure = 1400;

      const animasyon = zaman => {
        const ilerleme = Math.min((zaman - baslangic) / sure, 1);
        const yumusak = 1 - Math.pow(1 - ilerleme, 3);
        setDeger(Math.round(hedef * yumusak));
        if (ilerleme < 1) requestAnimationFrame(animasyon);
      };

      requestAnimationFrame(animasyon);
      izleyici.unobserve(eleman);
    }, { threshold: 0.45 });

    izleyici.observe(eleman);
    return () => izleyici.disconnect();
  }, [hedef]);

  return <strong ref={ref}>{deger}{ek}</strong>;
}

function YuklemeEkrani({ aktif }) {
  return (
    <div className={`yukleme-ekrani ${aktif ? "" : "kapandi"}`} aria-hidden={!aktif}>
      <div className="yukleme-cizgi" />
      <img src={GORSELLER.logo} alt="Seven Steel logosu" />
      <span>Çelik yapı sistemi yükleniyor</span>
    </div>
  );
}

function UstMenu() {
  const [acik, setAcik] = useState(false);

  return (
    <header className="ust-menu">
      <nav className="ust-menu-ic" aria-label="Ana menü">
        <div className="menu-sol">
          {menu.slice(0, 3).map(([baslik, hedef]) => (
            <a key={hedef} href={hedef}>{baslik}</a>
          ))}
        </div>

        <a className="logo-baglanti" href="#ana-sayfa" aria-label="Seven Steel ana sayfa">
          <img src={GORSELLER.logo} alt="Seven Steel logosu" width="128" height="72" />
        </a>

        <div className="menu-sag">
          {menu.slice(3).map(([baslik, hedef]) => (
            <a key={hedef} href={hedef}>{baslik}</a>
          ))}
        </div>

        <button className="mobil-menu-dugme" type="button" onClick={() => setAcik(!acik)} aria-label="Menüyü aç veya kapat" aria-expanded={acik}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobil-menu ${acik ? "acik" : ""}`}>
        {menu.map(([baslik, hedef]) => (
          <a key={hedef} href={hedef} onClick={() => setAcik(false)}>{baslik}</a>
        ))}
      </div>
    </header>
  );
}

function Kahraman() {
  const ref = useRef(null);
  useKahramanParalaks(ref);

  return (
    <section id="ana-sayfa" className="kahraman" ref={ref}>
      <img className="kahraman-gorsel" src={GORSELLER.kahraman} alt="Seven Steel çelik çatı ve çelik yapı uygulama sahası" loading="eager" fetchPriority="high" />
      <div className="kahraman-doku" aria-hidden="true" />
      <div className="kahraman-izgara" aria-hidden="true" />
      <div className="kahraman-hat hat-1" aria-hidden="true" />
      <div className="kahraman-hat hat-2" aria-hidden="true" />

      <div className="kahraman-icerik">
        <div className="kahraman-metin" data-gorun="sol">
          <span className="etiket">Adana merkezli, Türkiye geneli çelik yapı uygulamaları</span>
          <h1>SEVEN STEEL ÇELİK YAPI</h1>
          <p className="kahraman-alt">
            Türkiye Geneli Çelik Yapı, Çelik Çatı, Cephe Kaplama, Prefabrik Ev ve Konteyner Çözümleri
          </p>
          <p className="kahraman-aciklama">
            Çelik konstrüksiyon, çelik çatı, çatı kaplama, cephe kaplama, panel kaplama ve endüstriyel çelik yapı projelerinde keşiften montaja kadar güçlü mühendislik yaklaşımı.
          </p>
          <div className="kahraman-dugmeler">
            <a className="dugme birincil" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp ile Teklif Al</a>
            <a className="dugme ikincil" href="#projeler">Projelerimizi İncele</a>
          </div>
        </div>

        <aside className="kahraman-panel" data-gorun="sag" aria-label="Seven Steel proje özeti">
          <div className="panel-baslik">
            <span>Canlı proje yaklaşımı</span>
            <strong>Keşif → Proje → İmalat → Montaj</strong>
          </div>
          <img src={GORSELLER.model} alt="Çelik konstrüksiyon mühendislik modelleme görseli" loading="lazy" />
          <div className="panel-veriler">
            <div><Sayac hedef={81} ek="%" /><span>Saha uyumlu planlama</span></div>
            <div><Sayac hedef={4} /><span>Ana süreç adımı</span></div>
          </div>
        </aside>
      </div>

      <div className="kaydirma-isareti" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

function BolumBasligi({ rozet, baslik, metin }) {
  return (
    <div className="bolum-basligi" data-gorun="alt">
      <span>{rozet}</span>
      <h2>{baslik}</h2>
      <p>{metin}</p>
    </div>
  );
}

function Hakkimizda() {
  return (
    <section id="hakkimizda" className="bolum hakkimizda">
      <div className="bolum-ic iki-kolon">
        <div className="metin-blok" data-gorun="sol">
          <span className="etiket">Hakkımızda</span>
          <h2>Çeliği mühendislik, saha disiplini ve doğru detayla birleştiriyoruz.</h2>
          <p>
            SEVEN STEEL ÇELİK YAPI ELM. MÜH. MÜŞ. SAN. TİC LTD.ŞTİ, Adana merkezli olarak Türkiye geneli çelik yapı, çelik çatı, çelik konstrüksiyon, çatı kaplama, cephe kaplama, prefabrik ev ve konteyner çözümleri sunar.
          </p>
          <p>
            Her projede önce ihtiyacı, zemini, açıklığı, taşıyıcı sistemi, kaplama tipini ve montaj koşullarını birlikte değerlendiririz. Ardından imalat ve saha sürecini net bir planla yürütürüz.
          </p>
          <div className="sayaclar">
            <div><Sayac hedef={5} ek="+" /><span>Hizmet grubu</span></div>
            <div><Sayac hedef={11} /><span>Uzman uygulama alanı</span></div>
            <div><Sayac hedef={81} /><span>Türkiye iline hizmet hedefi</span></div>
          </div>
        </div>

        <div className="sinema-kart" data-gorun="sag">
          <img src={GORSELLER.hakkimizda} alt="Seven Steel çelik yapı montaj alanı" loading="lazy" />
          <div className="sinema-ust">Endüstriyel çelik yapı</div>
          <div className="sinema-alt">İmalat, montaj ve saha koordinasyonu</div>
        </div>
      </div>
    </section>
  );
}

function Hizmetler() {
  return (
    <section id="hizmetler" className="bolum hizmetler">
      <div className="bolum-ic">
        <BolumBasligi
          rozet="Hizmetler"
          baslik="Çelik yapıdan konteynere kadar uçtan uca çözüm."
          metin="Proje yönetimi, çelik yapı imalatı, çelik çatı, panel kaplama, yapı güçlendirme, prefabrik ev ve konteyner ihtiyaçlarında tek merkezli profesyonel süreç."
        />
        <div className="hizmet-izgara">
          {hizmetler.map(([baslik, metin], index) => (
            <article
              className="hizmet-kart"
              key={baslik}
              data-gorun={index % 3 === 0 ? "sol" : index % 3 === 1 ? "alt" : "sag"}
              onMouseMove={event => {
                const rect = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty("--rx", `${((event.clientY - rect.top) / rect.height - 0.5) * -10}deg`);
                event.currentTarget.style.setProperty("--ry", `${((event.clientX - rect.left) / rect.width - 0.5) * 10}deg`);
              }}
              onMouseLeave={event => {
                event.currentTarget.style.setProperty("--rx", "0deg");
                event.currentTarget.style.setProperty("--ry", "0deg");
              }}
            >
              <img src={GORSELLER.hizmetler[index]} alt={`Seven Steel ${baslik.toLocaleLowerCase("tr-TR")} hizmet görseli`} loading="lazy" />
              <div className="hizmet-katman" />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{baslik}</h3>
              <p>{metin}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projeler() {
  const featured = useMemo(() => projeler.map((proje, index) => ({ proje, gorsel: GORSELLER.projeler[index] })), []);

  return (
    <section id="projeler" className="bolum projeler">
      <div className="bolum-ic">
        <BolumBasligi
          rozet="Projeler"
          baslik="Gerçek uygulama görselleriyle proje kategorileri."
          metin="Yüklediğiniz proje fotoğrafları çelik çatı, panel kaplama, merdiven, prefabrik ev ve konteyner başlıklarında ayrıştırıldı."
        />
        <div className="proje-vitrin">
          {featured.map(({ proje: [baslik, metin, etiket], gorsel }, index) => (
            <article className="proje-kart" key={baslik} data-gorun={index % 2 === 0 ? "sol" : "sag"}>
              <img src={gorsel} alt={`Seven Steel ${baslik.toLocaleLowerCase("tr-TR")} görseli`} loading="lazy" />
              <div className="proje-yazi">
                <span>{etiket}</span>
                <h3>{baslik}</h3>
                <p>{metin}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="galeri-serit" aria-label="Seven Steel proje galerisi">
          {GORSELLER.galeri.map((gorsel, index) => (
            <figure key={gorsel} data-gorun="alt">
              <img src={gorsel} alt={`Seven Steel çelik yapı proje galerisi görsel ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Neden() {
  return (
    <section id="neden-seven-steel" className="bolum neden">
      <div className="bolum-ic iki-kolon">
        <div className="sinema-kart ters" data-gorun="sol">
          <img src={GORSELLER.atölye} alt="Seven Steel özel ekipman ve çelik imalat atölyesi" loading="lazy" />
          <div className="sinema-ust">Kalite odağı</div>
          <div className="sinema-alt">Güçlü kaynak, doğru bağlantı, temiz teslim</div>
        </div>

        <div className="metin-blok" data-gorun="sag">
          <span className="etiket">Neden Seven Steel?</span>
          <h2>Kurumsal netlik, güçlü saha uygulaması ve uzun ömürlü çelik çözümler.</h2>
          <div className="neden-liste">
            {nedenler.map(([baslik, metin], index) => (
              <article key={baslik}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <div>
                  <h3>{baslik}</h3>
                  <p>{metin}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Iletisim() {
  return (
    <section id="iletisim" className="bolum iletisim">
      <div className="bolum-ic">
        <BolumBasligi
          rozet="İletişim"
          baslik="Projeniz için keşif ve teklif görüşmesi yapalım."
          metin="Çelik yapı, çelik çatı, çelik konstrüksiyon, çatı kaplama, cephe kaplama, panel kaplama, prefabrik ev, konteyner, merdiven imalatı ve yapı güçlendirme ihtiyaçlarınız için bizimle iletişime geçebilirsiniz."
        />

        <div className="iletisim-izgara">
          <address className="iletisim-kart" data-gorun="sol">
            <span className="etiket">Firma bilgileri</span>
            <h3>SEVEN STEEL ÇELİK YAPI ELM. MÜH. MÜŞ. SAN. TİC LTD.ŞTİ</h3>
            <dl>
              <div>
                <dt>Telefon / WhatsApp</dt>
                <dd><a href={whatsappUrl} target="_blank" rel="noreferrer">{telefon}</a></dd>
              </div>
              <div>
                <dt>Adres</dt>
                <dd>Yeni Mahalle 4398 Sokak No:4/18J, Adana, Türkiye</dd>
              </div>
              <div>
                <dt>Alan adı</dt>
                <dd><a href="https://sevensteel.com.tr">sevensteel.com.tr</a></dd>
              </div>
            </dl>
            <a className="dugme birincil" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp ile Teklif Al</a>
          </address>

          <div className="harita-kart" data-gorun="sag">
            <iframe
              title="Seven Steel Adana konumu"
              src="https://www.google.com/maps?q=Yeni%20Mahalle%204398%20Sokak%20No%3A4%2F18J%2C%20Adana%2C%20Turkey&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AltBilgi() {
  return (
    <footer className="alt-bilgi">
      <img src={GORSELLER.logo} alt="Seven Steel logosu" loading="lazy" />
      <p>© 2026 SEVEN STEEL ÇELİK YAPI ELM. MÜH. MÜŞ. SAN. TİC LTD.ŞTİ. Tüm hakları saklıdır.</p>
    </footer>
  );
}

function Uygulama() {
  const yukleniyor = useYuklenme();
  useGorunmeEfekti();

  return (
    <>
      <YuklemeEkrani aktif={yukleniyor} />
      <UstMenu />
      <main>
        <Kahraman />
        <Hakkimizda />
        <Hizmetler />
        <Projeler />
        <Neden />
        <Iletisim />
      </main>
      <AltBilgi />
      <a className="whatsapp-sabit" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp ile teklif görüşmesi başlat">
        <span>WhatsApp</span>
      </a>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Uygulama />);
