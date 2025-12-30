import { Button } from '@/components/ui/button';
import { useSidebar } from './ui/sidebar';
import { Logo } from '@/assets/Logo';
import { MenuIcon } from 'lucide-react';

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header>
      <Logo />

      <Button variant="ghost" size="icon" onClick={toggleSidebar}>
        <MenuIcon />
      </Button>
    </header>
  );
};

export default Header;
