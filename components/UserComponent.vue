<template>
  <div
    ref="userComponent"
    class="user-component"
  >
    <template v-if="!user?.id">
      <RouterLink to="/sign-in">
        <CordsKitButton class="compact rect outline">
          Sign In
        </CordsKitButton>
      </RouterLink>
    </template>

    <template v-else>
      <div
        class="user-avatar clickable"
        :class="hasAvatar ? 'has-avatar' : 'no-avatar'"
        @click.prevent.stop="show = !show"
      >
        <div
          v-if="hasAvatar"
          class="user-avatar-content"
          :style="`background-image: url('${$props.user.getAvatar()}')`"
        />
        <div
          v-else
          class="user-avatar-content"
        >
          {{ $props.user.getInitials() }}
        </div>
      </div>

      <div
        v-if="show"
        class="user-dropdown"
      >
        <div class="user-dropdown-row">
          <div
            class="user-avatar"
            :class="hasAvatar ? 'has-avatar' : 'no-avatar'"
          >
            <div
              v-if="hasAvatar"
              class="user-avatar-content"
              :style="`background-image: url('${user.getAvatar()}')`"
            />
            <div
              v-else
              class="user-avatar-content"
            >
              {{ $props.user.getInitials() }}
            </div>
          </div>
          <div class="user-meta">
            <div class="user-meta-name">
              {{ $props.user.getName() }}
            </div>
            <div class="user-meta-email">
              {{ $props.user.getEmail() }}
            </div>
          </div>
        </div>
        <div class="user-dropdown-row sign-out-row">
          <a @click.prevent="signOut()">
            <CordsKitButton class="compact rect outline">Sign Out</CordsKitButton>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Backend from '~/src/Backend';
import type User from '~/src/User';

const props = defineProps<{
  user: User
}>();

const userComponent = ref();

const show = ref(false);
onClickOutside(userComponent, () => { show.value = false; });

const hasAvatar = !!props.user.getAvatar();

const backend = Backend.getInstance();

const signOut = async () => {
  await backend.signOut();
  window.location.reload();
};
</script>

<style lang="scss" scoped>
@import "../font-metrics";
.user-component {
  position: relative;
  flex: 0 0 auto;
  .user-avatar {
    position: relative;
    width: var(--size, 36px);
    height: var(--size, 36px);
    border-radius: 50%;
    @include font-metrics;
    --font-weight: 500;
    --font-size: 12;
    --color: #fff;
    --line-height: normal;
    .user-avatar-content {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    &.no-avatar .user-avatar-content {
      background: var(--link-color);
      color: #ffffff;
    }
    &.has-avatar{
      .user-avatar-content {
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        box-shadow: inset 0 0 1px rgba(#232a2f, 0.3);
      }
    }
    &.clickable {
      cursor: pointer;
      &:before {
        content: "";
        position: absolute;
        // z-index: -1;
        top: -10%;
        left: -10%;
        width: 120%;
        height: 120%;
        border-radius: 50%;
        background: rgb(var(--link-color-rgb) / 0.25);
        pointer-events: none;
        transition: opacity 200ms;
        opacity: 0;
      }
      &:hover {
        &:before {
          opacity: 1;
        }
      }
    }
  }
  .user-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    width: 280px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    border: 1px solid rgb(var(--silver-color-rgb) / 0.5);
    box-shadow: 0 5px 10px rgb(var(--silver-color-rgb) / 0.25);
    .user-dropdown-row {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(--padding, 25px);
      &:not(:last-child) {
        border-bottom: 1px solid rgb(var(--silver-color-rgb) / 0.5);
      }
    }
    .user-avatar {
      --size: 80px;
      --font-size: 18;
    }
    .user-meta {
      margin-top: 10px;
      text-align: center;
      > * {
        @include font-metrics;
        line-height: 1.2;
      }
      &-name {
        --font-weight: 500;
        --font-size: 14;
        --color: var(--typography-heading-color);
      }
      &-email {
        --font-size: 12;
      }
    }
    .sign-out-row,
    .language-toggle-row {
      --padding: 15px 25px;
    }
    .language-toggle-row {
      a {
        @include font-metrics;
        --font-size: 12;
      }
    }
  }
}
</style>
