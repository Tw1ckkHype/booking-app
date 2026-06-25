<style scoped lang="scss">
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #231F26;
  border-top: 1px solid #3A3A42;
  display: none;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  z-index: 1000; // увеличим z-index
  height: 70px;
  transform: translateZ(0); // оптимизация для мобильных
  will-change: transform;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  
  @media (max-width: 768px) {
    display: flex;
  }
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A0A0A0;
  text-decoration: none;
  transition: all 0.2s;
  flex: 1;
  height: 100%;
  padding: 0;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &.active {
    color: white;
  }
  
  &:hover {
    color: white;
  }
}
</style>