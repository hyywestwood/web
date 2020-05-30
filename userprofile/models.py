from django.db import models
from django.contrib.auth.models import User
# 处理图片
from PIL import Image
# 引入内置信号
# from django.db.models.signals import post_save
# 引入信号接收器的装饰器
# from django.dispatch import receiver
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit



# 用户扩展信息
class Profile(models.Model):
    # 与 User 模型构成一对一的关系
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    # 电话号码字段
    phone = models.CharField(max_length=20, blank=True)
    # 头像
    avatar = ProcessedImageField(
        upload_to='avatar/%Y%m%d',
        processors=[ResizeToFit(width=40)],
        format='JPEG',
        options={'quality': 100},
    )
    # 个人简介
    bio = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return 'user {}'.format(self.user.username)

    # # 保存时处理图片
    # def save(self, *args, **kwargs):
    #     # 调用原有的 save() 的功能
    #     profile = super(Profile, self).save(*args, **kwargs)
    #
    #     # 固定宽度缩放图片大小
    #     if self.avatar and not kwargs.get('update_fields'):
    #         image = Image.open(self.avatar)
    #         (x, y) = image.size
    #         new_x = 400
    #         new_y = int(new_x * (y / x))
    #         resized_image = image.resize((new_x, new_y), Image.ANTIALIAS)
    #         resized_image.save(self.avatar.path)
    #
    #     return profile


# 旧教程中采用了信号接收函数，在后台添加User时有时会产生bug
# 已采用其他方法实现其功能，废除了此信号接收函数
# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, created, **kwargs):
#     if not created:
#         instance.profile.save(by_signal=True)