import { collection, addDoc } from "firebase/firestore";
import db from "../../database/initfirebase";

const createMsg = async () => {
  await addDoc(collection(db, "ทดสอบๆ"), {
    id: "1234",
    name: "zotee",
    text: "โย่วๆ",
    time: "sadasd",
  });
  // try {
  //   const a = await addDoc(collection(db, "ทดสอบๆ"), {
  //     id: "1234",
  //     name: "zotee",
  //     text: "โย่วๆ",
  //     time: "now",
  //   });
  //   console.log(a.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
};

export default function Chat() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-red-400">
      <div className="h-1/2 w-1/3 bg-blue-400">
        <button className="bg-purple-400 px-4 py-2" onClick={createMsg}>
          add Data
        </button>
        <br />
        <br />
        <button className="bg-green-400 px-4 py-2" onClick={createMsg}>
          login
        </button>
      </div>
    </div>
  );
}
