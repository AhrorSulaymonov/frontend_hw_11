import React, { useState } from "react";
import styles from "./styles/App.module.css"; // CSS Moduleni import qilish

// GitHub linklarini komponentdan tashqariga chiqaramiz
const GITHUB_LINKS = [
  "https://github.com/AhrorSulaymonov/vite1.git",
  "https://github.com/AhrorSulaymonov/vite2.git",
  "https://github.com/AhrorSulaymonov/vite3.git",
  "https://github.com/AhrorSulaymonov/vite4.git",
  "https://github.com/AhrorSulaymonov/vite5.git",
  "https://github.com/AhrorSulaymonov/vite6.git",
  "https://github.com/AhrorSulaymonov/vite7.git",
  "https://github.com/AhrorSulaymonov/vite8.git",
  "https://github.com/AhrorSulaymonov/vite9.git",
  "https://github.com/AhrorSulaymonov/vite10.git",
];

// ----- Ajratilgan Komponentlar -----

// Rang paneli uchun komponent
function ColorPanel({ bgColor, textColor }) {
  return (
    <div className={styles.colorPanel} style={{ backgroundColor: bgColor }}>
      <p className={styles.panelText} style={{ color: textColor }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illum
        nemo adipisci obcaecati ab praesentium sint dicta. Consequatur dolorem
        hic illum!
      </p>
    </div>
  );
}

// Rang tanlagichlar uchun komponent
function ColorPickers({ bgColor, textColor, onBgChange, onTextColorChange }) {
  return (
    <div className={styles.colorPickersWrapper}>
      <div className={styles.pickerGroup}>
        <label className={styles.pickerLabel}>Background:</label>
        <input
          type="color"
          value={bgColor}
          onChange={onBgChange}
          className={styles.colorInput}
        />
        <input
          type="text"
          value={bgColor}
          readOnly
          className={styles.hexInput}
        />
      </div>
      <div className={styles.pickerGroup}>
        <label className={styles.pickerLabel}>Text:</label>
        <input
          type="color"
          value={textColor}
          onChange={onTextColorChange}
          className={styles.colorInput}
        />
        <input
          type="text"
          value={textColor}
          readOnly
          className={styles.hexInput}
        />
      </div>
    </div>
  );
}

// Ism kiritish formasi uchun komponent
function NameInputForm({
  maleName,
  femaleName,
  onMaleChange,
  onFemaleChange,
  onAddUser,
}) {
  // Tugmani faqat biron bir input to'ldirilganda aktiv qilish
  const isAddButtonDisabled = !maleName.trim() && !femaleName.trim();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddUser();
    }
  };

  return (
    <div className={styles.inputForm}>
      <h3 className={styles.formTitle}>Add Names</h3>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Male Name"
          value={maleName}
          onChange={onMaleChange}
          className={styles.nameInput}
          onKeyDown={handleKeyDown} // Enter bosilganda qo'shish
        />
        <input
          type="text"
          placeholder="Female Name"
          value={femaleName}
          onChange={onFemaleChange}
          className={styles.nameInput}
          onKeyDown={handleKeyDown} // Enter bosilganda qo'shish
        />
        <button
          onClick={onAddUser}
          className={styles.addButton}
          disabled={isAddButtonDisabled} // Disable holati
          style={{
            opacity: isAddButtonDisabled ? 0.6 : 1,
            cursor: isAddButtonDisabled ? "not-allowed" : "pointer",
          }} // Noaniq ko'rinish
        >
          Add
        </button>
      </div>
    </div>
  );
}

// Ismlar ro'yxati uchun komponent
function NameList({ title, items }) {
  return (
    <div className={styles.listCard}>
      <h4 className={styles.listTitle}>{title}</h4>
      {items.length > 0 ? (
        <ul className={styles.list}>
          {items.map((name, index) => (
            <li key={index} className={styles.listItem}>
              {name}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyList}>No names added yet.</p> // Bo'sh holat uchun xabar
      )}
    </div>
  );
}

// Repolar ro'yxati uchun komponent
function RepoList({ links }) {
  return (
    <div className={styles.repoListCard}>
      <h4 className={styles.repoListTitle}>GitHub Repositories</h4>
      {links.length > 0 ? (
        <ul className={styles.repoList}>
          {links.map((link, index) => (
            <li key={index} className={styles.repoListItem}>
              <a
                href={link}
                target="_blank" // Yangi oynada ochish
                rel="noopener noreferrer" // Xavfsizlik uchun
                className={styles.repoLink}
              >
                {link.split("/").pop().replace(".git", "")}{" "}
                {/* Faqat repo nomini ko'rsatish */}
                {/* ({link}) - To'liq linkni ham ko'rsatish mumkin */}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyList}>No repositories listed.</p>
      )}
    </div>
  );
}

// ----- Asosiy App Komponenti -----

function App() {
  const [bgColor, setBgColor] = useState("#333333"); // Boshlang'ich ranglarni o'zgartirdim
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [maleName, setMaleName] = useState("");
  const [femaleName, setFemaleName] = useState("");
  const [maleList, setMaleList] = useState([]);
  const [femaleList, setFemaleList] = useState([]);

  const handleAddUser = () => {
    // Trim qilingan ismlarni olish
    const trimmedMaleName = maleName.trim();
    const trimmedFemaleName = femaleName.trim();

    // Yangi ro'yxatlarni yaratish
    const newMaleList = trimmedMaleName
      ? [...maleList, trimmedMaleName]
      : maleList;
    const newFemaleList = trimmedFemaleName
      ? [...femaleList, trimmedFemaleName]
      : femaleList;

    // State'ni faqat o'zgarish bo'lsa yangilash
    if (newMaleList !== maleList) {
      setMaleList(newMaleList);
      setMaleName(""); // Inputni tozalash
    }
    if (newFemaleList !== femaleList) {
      setFemaleList(newFemaleList);
      setFemaleName(""); // Inputni tozalash
    }
  };

  return (
    <div className={styles.container}>
      {/* Rang Paneli */}
      <ColorPanel bgColor={bgColor} textColor={textColor} />

      {/* Rang Tanlagichlar */}
      <ColorPickers
        bgColor={bgColor}
        textColor={textColor}
        onBgChange={(e) => setBgColor(e.target.value)}
        onTextColorChange={(e) => setTextColor(e.target.value)}
      />

      {/* Ism Kiritish Formasi */}
      <NameInputForm
        maleName={maleName}
        femaleName={femaleName}
        onMaleChange={(e) => setMaleName(e.target.value)}
        onFemaleChange={(e) => setFemaleName(e.target.value)}
        onAddUser={handleAddUser}
      />

      {/* Ismlar Ro'yxatlari */}
      <div className={styles.listsContainer}>
        <NameList title="Males" items={maleList} />
        <NameList title="Females" items={femaleList} />
      </div>

      {/* Repolar Ro'yxati */}
      <RepoList links={GITHUB_LINKS} />
    </div>
  );
}

export default App;
//{/* <input type="color" onChange={(e) => setTextColor(e.target.value)} />
//
//  <h1 style={{ color: textColor, fontSize: "50px" }}>
// This is {isReact ? "React" : "Vue"} App!
// </h1>

// <button onClick={() => setIsReact(!isReact)}>Change</button> */}

// <h1>This is {isReact ? "React" : "Vue"} App!</h1>
// React.createElement("h1", null, `This is ${isReact ? "React" : "Vue"} App!`);

// <button onClick={() => setIsReact(!isReact)}>Change</button>
// React.createElement("button", { onClick: () => setIsReact(!isReact), style: {} }, "Change");
