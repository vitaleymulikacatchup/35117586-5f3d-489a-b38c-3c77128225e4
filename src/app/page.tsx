"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart3, BookOpen, Briefcase, Cloud, Code, Palette, Sparkles, Target, Users, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {name: "About", id: "about"},
            {name: "Courses", id: "courses"},
            {name: "Programs", id: "programs"},
            {name: "Pricing", id: "pricing"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="Galileo IT School"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Where Technology Education Meets Innovation"
          description="Transform your future with comprehensive IT training programs designed by industry experts. Master programming, web development, data science, and cloud technologies at Galileo IT School."
          tag="Learn. Code. Succeed."
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718297307-excvbv1j.jpg",
              imageAlt: "Students learning in modern IT classroom"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718299609-grwhmkkq.jpg",
              imageAlt: "Programming and coding workspace"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718300748-ormk251o.jpg",
              imageAlt: "Web design and UI development"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718306162-brricyn5.jpg",
              imageAlt: "Data science and analytics training"
            }
          ]}
          buttons={[
            {text: "Start Learning", href: "courses"},
            {text: "View Programs", href: "programs"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          title="Empowering Future Tech Leaders"
          description="We believe in hands-on learning, industry-relevant curriculum, and personalized mentorship. Our comprehensive approach ensures graduates are job-ready with real-world skills and portfolio projects."
          tag="Our Mission"
          tagIcon={Target}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718298493-fvlja0kl.jpg",
            imageAlt: "Digital learning platform interface"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718297307-excvbv1j.jpg",
            imageAlt: "Students collaborating on projects"
          }}
          buttons={[
            {text: "Learn More", href: "about"},
            {text: "Contact Us", href: "contact"}
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Comprehensive Learning Experience"
          description="Master the latest technologies with our industry-standard curriculum and hands-on approach"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Full-Stack Development",
              description: "Learn modern web technologies including React, Node.js, Python, and cloud deployment",
              icon: Code,
              button: {text: "Explore", href: "courses"}
            },
            {
              title: "UI/UX Design",
              description: "Master design principles, Figma, user research, and create stunning digital experiences",
              icon: Palette,
              button: {text: "Learn More", href: "design-courses"}
            },
            {
              title: "Data Science & AI",
              description: "Dive deep into machine learning, data analysis, and artificial intelligence applications",
              icon: BarChart3,
              button: {text: "Discover", href: "data-science"}
            },
            {
              title: "Cloud Computing",
              description: "Get certified in AWS, Azure, and Google Cloud with hands-on infrastructure projects",
              icon: Cloud,
              button: {text: "Start Now", href: "cloud-courses"}
            },
            {
              title: "Career Support",
              description: "Personalized mentorship, portfolio development, and job placement assistance",
              icon: Users,
              button: {text: "Get Support", href: "career-services"}
            },
            {
              title: "Industry Projects",
              description: "Work on real client projects and build a professional portfolio that showcases your skills",
              icon: Briefcase,
              button: {text: "View Projects", href: "portfolio"}
            }
          ]}
          buttons={[
            {text: "View All Features", href: "features"}
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Top Companies"
          description="Our graduates work at leading technology companies worldwide"
          tag="Industry Partners"
          tagIcon={BookOpen}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718316437-9gv6qh2t.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718317531-k9n5uwat.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718318771-q5qjg2kc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718319942-oqb33cly.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718320970-viba90cb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718321842-y6kap3zy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718322832-q797psaw.jpg"
          ]}
          speed={30}
          showCard={true}
          buttons={[
            {text: "View All Partners", href: "partners"}
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          brandName="Galileo IT School"
          copyrightText="© 2024 | Galileo IT School"
          columns={[
            {
              title: "Programs",
              items: [
                {label: "Full-Stack Development", href: "web-development"},
                {label: "Data Science", href: "data-science"},
                {label: "UI/UX Design", href: "design"},
                {label: "Mobile Development", href: "mobile"}
              ]
            },
            {
              title: "Resources",
              items: [
                {label: "Student Portal", href: "portal"},
                {label: "Career Services", href: "career-services"},
                {label: "Alumni Network", href: "alumni"},
                {label: "Blog", href: "blog"}
              ]
            },
            {
              title: "Company",
              items: [
                {label: "About Us", href: "about"},
                {label: "Instructors", href: "instructors"},
                {label: "Success Stories", href: "success"},
                {label: "Contact", href: "contact"}
              ]
            }
          ]}
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </>
  );
}