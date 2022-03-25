// list of tasks // mark as complete // edit button // delete button

<template>
  <div>
    <div class="overflow-x-auto">
      <table class="table w-fit m-4">
        <thead>
          <tr>
            <th class="bg-cyan-500 text-white"><h3>Task</h3></th>
            <th class="bg-cyan-500 text-white"><h3>Complete</h3></th>
            <th class="bg-cyan-500 text-white"><h3>Added on</h3></th>
            <th class="bg-cyan-500 text-white"><h3>Edit</h3></th>
            <th class="bg-cyan-500 text-white"><h3>Delete</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id" class="hover">
            <td>{{ supabase.title }}</td>
            <td>{{ supabase.is_complete }}</td>
            <td>{{ supabase.from("inserted_at") }}</td>
            <td>
              <button class="btn btn-square btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </td>
            <td>
              <button class="btn btn-circle btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7897.8,4996.3c-262.5-65.1-65.1,124.5-3609.2-3419.6L999.3-1710.6l-454-1367.8c-385.1-1157.1-454-1377.4-444.4-1444.4c17.2-132.2,124.5-239.5,256.7-256.7c67.1-9.6,287.4,59.4,1444.5,444.5l1367.8,454l3252.9,3251C8212,1157.2,9704.3,2662.9,9738.8,2714.7c189.6,285.4,212.6,632.2,65.1,948.3c-51.7,109.2-122.6,189.7-572.8,641.8c-333.3,335.3-553.7,542.1-624.5,584.3C8409.3,5009.7,8127.7,5051.9,7897.8,4996.3z M8265.6,4373.7c105.4-49.8,956-906.1,996.2-1001.9c36.4-90,36.4-170.5-1.9-260.5c-19.2-46-183.9-226.1-463.6-507.7l-434.9-434.9l-655.2,655.2L7049.1,3481l427.2,427.2c247.1,249,457.9,442.5,501.9,463.6C8074.1,4419.7,8166,4419.7,8265.6,4373.7z M7269.5,2379.4l651.3-651.3L5386.3-806.4L2853.7-3339l-969.4-323.8c-532.6-176.2-973.2-318-978.9-312.3c-5.7,5.7,134.1,444.5,310.4,975.1l319.9,963.6L4068.3,498.2c1390.8,1392.7,2534.5,2532.6,2540.2,2532.6S6911.2,2737.7,7269.5,2379.4z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { supabase } from "../supabase";
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";
</script>
