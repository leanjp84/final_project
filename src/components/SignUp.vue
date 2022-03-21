<template>
  <div class="card w-96 shadow-xl bg-white">
      
    <form>
     <div class="card-body">
         <div class="w-24 mx-auto"><img class="mx-auto" src="src/assets/logo-round.png" alt="logo"></div><br>
         <span class="text-sm text-gray-900">Welcome </span>
         <h1 class="text-2xl font-bold">Create your account</h1>
         </div>
         <div class="my-3 mr-5 ml-5">
            <label class="block text-md mb-2" for="name">Name</label>
            <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="name" name="name" placeholder="name">
        </div>
     <div class="my-3 mr-5 ml-5">
            <label class="block text-md mb-2" for="email">Email</label>
            <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email">
        </div>
        <div class="mt-5 mr-5 ml-5">
            <label class="block text-md mb-2" for="password">Password</label>
            <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password">
        </div>
        <div class="mt-5 mr-5 ml-5">
            <label class="block text-md mb-2" for="repeat-password">Repeat Password</label>
            <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="repeat-password" placeholder="repeat password">
         </div>
        <div class="card-actions justify-end mr-5 ml-5">
            <button @click="signUp" type="submit" class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Register</button>          
        </div> <br>
    </form>
 </div>
</template>

<script>

</script>