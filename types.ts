export {}

interface WorkProps {
   title: string;
   description: string;
   subtitle: string;
   demo: string;
   code: string;
   builtWith?: Array<{ name: string; img: string }>;
   image?: string;
}
