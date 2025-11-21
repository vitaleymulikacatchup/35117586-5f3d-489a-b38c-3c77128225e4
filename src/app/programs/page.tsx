"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Clock, Crown, DollarSign, Star } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {name: "Home", id: "/"},
            {name: "About", id: "about"},
            {name: "Programs", id: "programs"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="Galileo IT School"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Choose Your Learning Path"
          description="Select from our comprehensive range of technology programs designed for different skill levels"
          tag="Programs"
          tagIcon={BookOpen}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "web-development",
              name: "Full-Stack Web Development",
              price: "12 weeks",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718303784-zs1o6yb1.png",
              imageAlt: "Web development course materials",
              onProductClick: () => console.log('Web Development clicked')
            },
            {
              id: "mobile-development",
              name: "Mobile App Development",
              price: "10 weeks",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718305099-0qj3qcrq.jpg",
              imageAlt: "Mobile development course",
              onProductClick: () => console.log('Mobile Development clicked')
            },
            {
              id: "data-science",
              name: "Data Science & Analytics",
              price: "16 weeks",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718306162-brricyn5.jpg",
              imageAlt: "Data science program",
              onProductClick: () => console.log('Data Science clicked')
            },
            {
              id: "ui-ux-design",
              name: "UI/UX Design Bootcamp",
              price: "8 weeks",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763718300748-ormk251o.jpg",
              imageAlt: "UI UX design course",
              onProductClick: () => console.log('UI UX Design clicked')
            }
          ]}
          buttons={[
            {text: "View All Programs", href: "programs"}
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Invest in Your Future"
          description="Flexible payment options and scholarship opportunities available for all programs"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Popular Choice",
              badgeIcon: Star,
              price: "$3,999",
              subtitle: "Perfect for career changers",
              features: [
                "12-week intensive program",
                "Industry-standard curriculum",
                "Personal mentor assigned",
                "Career placement support",
                "Lifetime access to materials"
              ]
            },
            {
              id: "premium",
              badge: "Most Comprehensive",
              badgeIcon: Crown,
              price: "$5,999",
              subtitle: "Complete tech transformation",
              features: [
                "16-week extended program",
                "Advanced specialization tracks",
                "One-on-one career coaching",
                "Portfolio development support",
                "Job guarantee program",
                "Alumni network access"
              ]
            },
            {
              id: "part-time",
              badge: "Flexible Learning",
              badgeIcon: Clock,
              price: "$2,999",
              subtitle: "Learn while working",
              features: [
                "20-week part-time schedule",
                "Evening and weekend classes",
                "Self-paced online modules",
                "Mentor support included",
                "Career transition guidance"
              ]
            }
          ]}
          buttons={[
            {text: "Apply for Scholarship", href: "scholarship"}
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