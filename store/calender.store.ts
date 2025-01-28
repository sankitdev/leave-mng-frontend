// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { devtools } from "zustand/middleware";

// interface Leave {
//   startDate: string;
//   endDate: string;
//   studentName: string;
// }

// interface LeaveStore {
//   leaves: Leave[] | null;
//   addLeave: (leave: Leave) => void;
//   removeLeave: (index: number) => void;
//   clearLeaves: () => void;
// }

// const useLeaveStore = create<LeaveStore>()(
//   devtools(
//     persist(
//       (set) => ({
//         leaves: null,
//         addLeave: (leave) =>
//           set((state) => ({
//             leaves: state.leaves ? [...state.leaves, leave] : [leave],
//           })),
//         removeLeave: (index) =>
//           set((state) => ({
//             leaves: state.leaves
//               ? state.leaves.filter((_, i) => i !== index)
//               : null,
//           })),
//         clearLeaves: () => set({ leaves: null }),
//       }),
//       {
//         name: "leave-storage", // LocalStorage key
//       }
//     )
//   )
// );

// export default useLeaveStore;
