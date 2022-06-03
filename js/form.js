const formRef = document.querySelector('.js-form');

const STORAGE_KEY = 'form-values';
let storageDataObj = hasStorageData() ? hasStorageData() : {};

formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onFormSubmit);

onFormSetFieldsValues();

function hasStorageData() {
  const StorageDataStr = localStorage.getItem(STORAGE_KEY);
  return StorageDataStr ? JSON.parse(StorageDataStr) : false;
}

// функція, яка забирає дані з полів
function onFormInput(event) {
  const { name, value } = event.target;

  storageDataObj[name] = value;

  // зберігаємо в сховищі
  onLocaleStorageSaveData(storageDataObj);
}

// функція, яка зберігає дані в сховищі
function onLocaleStorageSaveData(dataObject) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObject));
}

// функція, яка встановлює на поля збережені дані
function onFormSetFieldsValues() {
  if (!storageDataObj) {
    return;
  }

  const dataArrayEntries = Object.entries(storageDataObj);

  dataArrayEntries.forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}

// функція, яка запускається при відправленні форми
function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  formRef.reset();
}
