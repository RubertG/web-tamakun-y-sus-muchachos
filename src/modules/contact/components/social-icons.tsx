import Image from 'next/image'
import Link from 'next/link'

const SocialIcons = () => {
  const whatsappMessage = 'Hola, me gustaría obtener más información de su agrupación musical.'
  const whatsappNumber = '3112005489'

  return (
    <section className="flex items-center justify-center gap-3.5 [&_img:hover]:scale-125 [&_img]:size-8 [&_img]:transition-transform">
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/assets/whatsapp.svg" width={50} height={50} quality={100} alt="WhatsApp" />
      </Link>

      <Link href="https://www.instagram.com/tamakun_y_sus_muchachos/" target="_blank" rel="noopener noreferrer">
        <Image src="/assets/instagram.svg" width={50} height={50} quality={100} alt="WhatsApp" className="!size-7" />
      </Link>

      <Link href="https://www.tiktok.com/@tamakun.music" target="_blank" rel="noopener noreferrer">
        <Image src="/assets/tiktok.svg" width={50} height={50} quality={100} alt="WhatsApp" />
      </Link>

      <Link href="https://www.facebook.com/profile.php?id=100076514251225" target="_blank" rel="noopener noreferrer">
        <Image src="/assets/facebook.svg" width={50} height={50} quality={100} alt="WhatsApp" />
      </Link>
    </section>
  )
}

export { SocialIcons }
