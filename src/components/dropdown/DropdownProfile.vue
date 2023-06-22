<template>
  <AppDropdown>
    <template #button>
      <img src="../../assets//images/avatar-1.png" />
      <CaretDown></CaretDown>
    </template>
    <template #menu>
      <li class="menu-item">Profile</li>
      <li class="menu-item">Account</li>
      <li class="menu-item">Help center</li>
      <div class="divider"></div>
      <li class="menu-item">Sign Out</li>
    </template>
  </AppDropdown>
</template>