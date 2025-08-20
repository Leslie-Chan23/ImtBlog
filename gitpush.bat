@echo off
REM 一键Git提交脚本
REM 使用方法: gitpush "你的提交信息"

REM 检查是否提供了提交信息
if "%~1" == "" (
    echo 错误: 请提供提交信息!
    echo 使用方法: gitpush "你的提交信息"
    pause
    exit /b 1
)

REM 执行Git命令
echo 正在添加所有文件...
git add -A

if %ERRORLEVEL% NEQ 0 (
    echo git add 命令执行失败!
    pause
    exit /b 1
)

echo 正在提交更改...
git commit -m "%~1"

if %ERRORLEVEL% NEQ 0 (
    echo git commit 命令执行失败!
    pause
    exit /b 1
)

echo 正在推送更改...
git push

if %ERRORLEVEL% NEQ 0 (
    echo git push 命令执行失败!
    pause
    exit /b 1
)

echo Git提交和推送成功完成!
pause