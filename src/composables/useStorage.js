import { projectStorage } from "@/firebase/config";
import { ref } from "vue";

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  return { url, filePath, error };
};

export { useStorage };
